const SectionWrapper = ({children}) => {
  return (
   <section className="border-t py-7 border-zinc-200/70 dark:border-zinc-700/90">
          
          <div className="w-[96%] mx-auto">
              {children}
      </div>
   </section>
  )
}

export default SectionWrapper