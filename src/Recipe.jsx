import { useState } from "react"

export default function Recipe({recipeShown}) {
  return (
    <>
        {recipeShown && 
            <section>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quia ea quam tempore in, perferendis eius eligendi, sit nulla omnis ipsum ullam nemo unde dicta deleniti vero soluta minus assumenda.</p>
            </section>
        }
    </>
  )
}
