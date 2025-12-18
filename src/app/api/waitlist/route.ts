import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, query, where, getDocs, serverTimestamp } from 'firebase/firestore';

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email is provided
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Normalize email to lowercase
    const normalizedEmail = email.toLowerCase().trim();

    // Check for duplicate email
    const earlyAccessRef = collection(db, 'EarlyAccess');
    const q = query(earlyAccessRef, where('email', '==', normalizedEmail));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return NextResponse.json(
        { error: 'This email is already on the waitlist!' },
        { status: 409 }
      );
    }

    // Add to EarlyAccess collection
    const docRef = await addDoc(earlyAccessRef, {
      email: normalizedEmail,
      createdAt: serverTimestamp(),
      source: 'landing',
    });

    console.log('New EarlyAccess signup:', normalizedEmail, 'ID:', docRef.id);

    return NextResponse.json(
      { 
        success: true, 
        message: "You're on the list! Axi is excited to meet you." 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Waitlist signup error:', error);
    
    // Check if it's a Firebase configuration error
    if (error instanceof Error && error.message.includes('Firebase')) {
      return NextResponse.json(
        { error: 'Service temporarily unavailable. Please try again later.' },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

// Handle GET requests (for testing)
export async function GET() {
  return NextResponse.json(
    { message: 'Axi Community Waitlist API - Use POST to sign up' },
    { status: 200 }
  );
}

