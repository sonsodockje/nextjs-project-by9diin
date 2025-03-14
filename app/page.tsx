import React from 'react'
import { Button } from '@/components/ui/button'
import styles from "./page.module.scss" 
import SideNavigation from '@/components/common/navigation/SideNavigation'


export default function Home() {
     return (
       
       <div className={styles.container}>
            <div className={styles.container__onBoarding}>
                    <span className={styles.container__onBoarding__title}>How to Start:</span>
                    <div className={styles.container__onBoarding__steps}>
                      <span>1. Create a page</span>
                      <span>2. Add boars to page</span>
                 </div>
                 {/* 페이지 추가 버튼 */}
                 <Button variant={"outline"} className='w-full bg-transparent text-orange-500 border-orange-400 hover:bg-orange-50 hover:text-orange-500 cursor-pointer'> Add Page</Button>
               </div>
         
     </div>
  )
}
