import { NextResponse } from 'next/server';
import ContactController from '@/controllers/contact.controller';

export async function POST(request) {
  try {
    const body = await request.json();
    const result = await ContactController.create({ body });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: error.message 
      },
      { status: 400 }
    );
  }
}

export async function GET() {
  try {
    const result = await ContactController.findAll();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: error.message 
      },
      { status: 500 }
    );
  }
}