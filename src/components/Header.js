import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className='bg-[#865DFF] flex flex-col items-center justify-center py-3'>
      <Link to="/">
        <img alt="logo" src='https://firebasestorage.googleapis.com/v0/b/tab-website-a3588.appspot.com/o/TAB_logo_textWhite-bgX.png?alt=media&token=5d2caefa-fcb3-4b0f-a6a3-addfb55f8035' className='h-52' />
      </Link>

    </div>
  )
}