'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, CaretDown, List, X, Phone } from '@phosphor-icons/react';
import { business } from '@/lib/data';

const navItems = [
  { label: 'Hem', href: '/' },
  {
    label: 'Priser',
    href: '#',
    items: [
      { label: 'Intensivkurs', href: '/intensivkurs' },
      { label: 'Körlektioner', href: '/korlektioner' },
      { label: 'Paket Pris', href: '/paket' },
      { label: 'Kurser Pris', href: '/kurserpris' },
      { label: 'Teori', href: '/teori' },
    ],
  },
  {
    label: 'Kurser',
    href: '#',
    items: [
      { label: 'Handledare & övningskörning', href: '/handledarkurs' },
      { label: 'Riskettan', href: '/riskettan' },
      { label: 'Risktvåan', href: '/risktvaan' },
    ],
  },
  { label: 'Våra Villkor', href: '/villkor' },
  { label: 'Vägen Till Körkort', href: '/vagen-till-korkort' },
  { label: 'Kontakt', href: '/kontakt' },
  {
    label: 'E-Handel',
    href: '#',
    items: [
      { label: 'Boka Kurs', href: business.booking },
      { label: 'Paket & Lektioner', href: business.shop },
    ],
  },
];
export function Logo() {
  return (
    <Link className="brand" href="/" aria-label="Proffs Trafikskola, startsida">
      <Image
        src="/images/proffslogga-black.png"
        alt="Proffs Trafikskola"
        width={252}
        height={84}
        loading="eager"
      />
    </Link>
  );
}
export default function Header() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const path = usePathname();
  const button = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);
  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
    const alignToHero = () => {
      const hero = document.querySelector<HTMLElement>('.inner-hero');
      if (!hero) {
        window.scrollTo(0, 0);
        return;
      }
      const headerSpace = Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          '--floating-header-space',
        ),
      );
      const headerClearance = Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          '--floating-header-clearance',
        ),
      );
      const top = hero.getBoundingClientRect().top + window.scrollY;
      const offset =
        (Number.isFinite(headerSpace) ? headerSpace : 0) +
        (Number.isFinite(headerClearance) ? headerClearance : 0);
      window.scrollTo(0, Math.max(0, top - offset));
    };
    requestAnimationFrame(alignToHero);
    const timeout = window.setTimeout(alignToHero, 120);
    return () => window.clearTimeout(timeout);
  }, [path]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setOpenDropdown(null);
        button.current?.focus();
      }
      if (open && e.key === 'Tab') {
        const links = panel.current?.querySelectorAll<HTMLAnchorElement>('a');
        if (!links?.length) return;
        const last = links[links.length - 1];
        if (e.shiftKey && document.activeElement === button.current) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          button.current?.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Huvudmeny">
          {navItems.map((item) =>
            item.items ? (
              <div
                className={`nav-dropdown ${openDropdown === item.label ? 'is-open' : ''}`}
                key={item.label}
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
                onFocus={() => setOpenDropdown(item.label)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setOpenDropdown(null);
                  }
                }}
              >
                {item.href === '#' ? (
                  <button
                    type="button"
                    className="nav-dropdown-trigger"
                    aria-expanded={openDropdown === item.label}
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                  >
                    {item.label} <CaretDown size={14} aria-hidden="true" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="nav-dropdown-trigger"
                    aria-current={path === item.href ? 'page' : undefined}
                    aria-expanded={openDropdown === item.label}
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.label} <CaretDown size={14} aria-hidden="true" />
                  </Link>
                )}
                <div
                  className="nav-dropdown-menu"
                >
                  {item.items.map((subitem) => (
                    <Link
                      href={subitem.href}
                      key={subitem.href}
                      onClick={() => setOpenDropdown(null)}
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} aria-current={path === item.href ? 'page' : undefined}>
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="header-actions">
          <Link href="/boka" className={`button button-small${path === '/' ? ' home-mobile-hidden' : ''}`}>
            Boka nu <ArrowUpRight size={18} />
          </Link>
          <button
            ref={button}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Stäng meny' : 'Öppna meny'}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={25} /> : <List size={25} />}
          </button>
        </div>
      </div>
      {open && (
        <nav ref={panel} id="mobile-menu" className="mobile-nav container" aria-label="Mobilmeny">
          {navItems.map((item) =>
            item.items ? (
              <div className="mobile-nav-group" key={item.label}>
                {item.href === '#' ? (
                  <span>{item.label}</span>
                ) : (
                  <Link href={item.href} aria-current={path === item.href ? 'page' : undefined}>
                    {item.label}
                    <ArrowUpRight size={20} />
                  </Link>
                )}
                {item.items.map((subitem) => (
                  <Link href={subitem.href} key={subitem.href} className="mobile-subitem">
                    {subitem.label}
                    <ArrowUpRight size={18} />
                  </Link>
                ))}
              </div>
            ) : (
              <Link href={item.href} key={item.href} aria-current={path === item.href ? 'page' : undefined}>
                {item.label}
                <ArrowUpRight size={20} />
              </Link>
            ),
          )}
          <a className="mobile-phone" href={`tel:${business.tel}`}>
            <Phone size={20} /> {business.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
