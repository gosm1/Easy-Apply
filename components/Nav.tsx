import Image from "next/image"

export default function Nav() {
  return (
    <nav>
      <div className="container nav-inner">
        <a href="/" className="logo">
          <Image src="/logo.png" alt="EasyApply" width={28} height={28} className="logo-img" />
          <span className="logo-text">EasyApply</span>
        </a>
        <div className="nav-links">
          <a href="/#story">Story</a>
          <a href="/#how">How it works</a>
          <a href="/#faq">FAQ</a>
          <a
            href="https://chromewebstore.google.com/detail/easyapply-job-url-autofil/bonnjpebplkekihiokbfeeejkcbhfnfk"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Add to Chrome Free
          </a>
        </div>
      </div>
    </nav>
  )
}
