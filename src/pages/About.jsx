function About() {
  return (
    <>
      <div className='h1 text-6xl mb-4'>Github Finder</div>
      <p className='mb-4 text-2xl font-light'>
        An application built with React to search GitHub profiles and display
        their details. This project is developed as part of a personal endeavor
        to enhance my skills in modern web development.
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-gray-400'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Design By:
        <a className='text-gray-400' href='https://github.com/marcosriani'>
          Marcos Riani
        </a>
      </p>
    </>
  )
}

export default About
