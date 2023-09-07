import React from 'react'
import Button from "@/components/ui/customButton";
import Input from '../ui/inputbase'

export default function MailingList() {
  return (
    <section className='flex flex-col items-center justify-center gap-6 py-12 md:py-24 px-6'>
        <h2 className='font-bold text-3xl md:text-4xl text-center'>Subscribe to Our Mailing List</h2>
        <div className="w-full md:w-1/2">
            <Input intent='secondary' rounded='none' placeholder='Enter an email...' />
            <Button label='Submit' intent='primary' rounded='none' />
        </div>
    </section>
  )
}
