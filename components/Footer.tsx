import Image from "next/image"

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div className="footer-left">
          <Image src="/logo.png" alt="EasyApply" width={22} height={22} style={{ borderRadius: "6px" }} />
          <span>Made by a student, for students. &nbsp;·&nbsp; © 2026</span>
        </div>
        <div className="footer-right">
          <a
            href="https://chromewebstore.google.com/detail/easyapply-job-url-autofil/bonnjpebplkekihiokbfeeejkcbhfnfk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chrome Store
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="/privacy">Privacy</a>
          <a href="/support">Support</a>
          <a href="mailto:contact@easyapply.com">Contact</a>
        </div>
      </div>
    </footer>
  )
}
