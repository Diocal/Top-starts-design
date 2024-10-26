import React from 'react';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

import { Layers, Activity, Users, BarChart2, Settings } from 'lucide-react'

import Board from '~/app/_components/board';
import { headers } from 'next/headers';



export default function Dashboard() {
  const user = auth();
  headers();

  if (!user.userId) {
    redirect('/');
  };

  return (
    redirect('/dashboard/data')
  )
}

