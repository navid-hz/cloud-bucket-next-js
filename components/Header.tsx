import React from 'react';
import {Button} from '@/components/ui/button';
import Image from 'next/image';
import Search from '@/components/Search';
import FileUploader from '@/components/FileUploader';

function Header() {
  return (
    <header>
        <Search />
        <div>
            <FileUploader />
            <form action="">
                <Button type='submit' className='sign-out-button' >
                    <Image 
                        src='/assets/icons/logout.svg'
                        alt='logout'
                        width={24}
                        height={24}
                        className='w-6'
                    />
                </Button>
            </form>
        </div>
    </header>
  )
}

export default Header