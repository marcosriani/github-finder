import SpinnerIcon from './assets/spinner(1).gif'

function Spinner() {
  return (
    <div className='w-100 mt-20'>
      <img
        src={SpinnerIcon}
        width={180}
        className='text-center mx-auto'
        alt='Loading'
      />
    </div>
  )
}

export default Spinner
