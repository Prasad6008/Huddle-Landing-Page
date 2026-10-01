import React from 'react'

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: 'linkedin.png',
    url: 'https://www.linkedin.com/in/prasad-r-s-4256a7274/',
  },
  {
    name: 'GitHub',
    icon: 'github.png',
    url: 'https://github.com/Prasad6008',
  },
  {
    name: 'Instagram',
    icon: 'insta.png',
    url: 'https://www.instagram.com/prasanth_r.s_/',
  },
]

const Footer = () => {
  return (
    <footer className="mx-auto flex w-full max-w-[1300px] justify-center gap-3 lg:justify-end">
      {socialLinks.map(({ name, icon, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${name}`}
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/80 p-[11px] transition-all transition duration-200 t hover:-translate-y-0.5 hover:border-[#ff51be] focus-visible:border-[#ff51be] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
        >
          <span
            aria-hidden="true"
            className="h-full w-full bg-white transition-colors duration-200 group-hover:bg-[#ff51be] group-focus-visible:bg-[#ff51be] motion-reduce:transition-none"
            style={{
              mask: `url(/images/${icon}) center / contain no-repeat`,
              WebkitMask: `url(/images/${icon}) center / contain no-repeat`,
            }}
          />
        </a>
      ))}
    </footer>
  )
}

export default Footer
