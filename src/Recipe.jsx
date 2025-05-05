export default function Recipe({recipe}) {
  return (
    <>
        {recipe&& 
            <section>
              {recipe}
            </section>
        }
    </>
  )
}
