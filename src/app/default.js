import { redirect } from 'next/navigation';

// Redirect root to site group
export default function Default() {
  redirect('/(site)');
} 