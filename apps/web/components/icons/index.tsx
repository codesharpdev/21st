import {
  CalendarIcon,
  CreditCardIcon,
  Info,
  LayoutDashboard,
  LucideProps,
  Menu,
  Moon,
  Search,
  Settings,
  SunMedium,
  type LucideIcon,
} from "lucide-react"
import { ClapIcon } from "./clap"
import { CursorDark } from "./cursor-dark"
import { CursorLight } from "./cursor-light"
import { LogoutIcon } from "./logout-icon"
import { LovableLogo } from "./lovable"
import { MagicPatternsLogo } from "./magic-patterns"
import { SitebrewLogo } from "./sitebrew"
import svgl from "./svgl"
import { TerminalIcon } from "./terminal"
import { VSCodeLogo } from "./vscode"
import WindsurfTealLogo from "./WindsurfTealLogo"
import { WorkflowIcon } from "./workslow"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  menu: Menu,
  vscode: VSCodeLogo,
  svgl: svgl,
  cursorAnimatedLogo: (props: LucideProps) => (
    <div className="pointer-events-none relative -ml-0.5 size-6 mix-blend-multiply dark:mix-blend-lighten lg:-ml-1 lg:mr-px lg:size-8">
      <img
        alt=""
        width="32"
        height="32"
        decoding="async"
        className="absolute transition-opacity duration-500"
        src="https://cursor.com/assets/videos/logo/placeholder-logo.webp"
      />
      <video
        width="32"
        height="32"
        playsInline
        preload="auto"
        aria-label="Cursor video logo animation"
        src="https://cursor.com/assets/videos/logo/logo-black.mp4"
        poster="https://cursor.com/assets/videos/logo/placeholder-logo.webp"
      />
    </div>
  ),
  cursorIcon: (props: LucideProps) => (
    <div className="pointer-events-none relative size-5 mix-blend-multiply dark:mix-blend-lighten">
      <img
        alt=""
        width="20"
        height="20"
        decoding="async"
        className="absolute transition-opacity duration-500"
        src="https://cursor.com/assets/videos/logo/placeholder-logo.webp"
      />
      <video
        width="20"
        height="20"
        playsInline
        preload="auto"
        aria-label="Cursor video logo animation"
        src="https://cursor.com/assets/videos/logo/logo-black.mp4"
        poster="https://cursor.com/assets/videos/logo/placeholder-logo.webp"
      />
    </div>
  ),
  cursorLogo: (props: LucideProps) => (
    <svg
      fill="currentColor"
      viewBox="0 0 69 13"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M.61621 6.43836c0-3.50869 2.23066-5.4743 5.49005-5.4743h3.91414v2.09026H6.23091c-1.99579 0-3.35255 1.13895-3.35255 3.38404 0 2.2451 1.35676 3.38404 3.35255 3.38404h3.78949v2.0903H6.10626c-3.25939 0-5.49005-1.99582-5.49005-5.47434ZM12.0472 8.41982V.96549h2.1834v7.00164c0 1.35676.702 1.83964 1.8554 1.83964h1.3095c1.139 0 1.8554-.48288 1.8554-1.83964V.96549h2.1677v7.47008c0 2.35533-1.5588 3.47723-3.6648 3.47723h-2.0273c-2.1205 0-3.6806-1.1232-3.6806-3.49298h.0013ZM23.7734.96549h6.4716c2.2149 0 3.3223 1.18487 3.3223 3.08749 0 1.21636-.5773 2.19917-1.4971 2.46422.9513.10891 1.404.79517 1.404 1.62182v3.77378H31.275V8.65338c0-.57734-.1719-.9828-.9513-.9828h-4.3511v4.24222h-2.1992V.96548Zm6.1763 4.66338c.9986 0 1.404-.53011 1.404-1.30952 0-.84241-.4054-1.29379-1.4341-1.29379h-3.9457v2.60463h3.9772l-.0014-.00132ZM35.5162 9.83815h6.0359c.7334 0 1.2006-.40545 1.2006-1.13895 0-.76367-.4829-1.06022-1.2479-1.1232l-3.0416-.23356c-1.9183-.1404-3.2278-1.10746-3.2278-3.16623 0-2.04302 1.4499-3.21214 3.3525-3.21214h5.9729v2.07451h-5.8482c-.8424 0-1.2794.40545-1.2794 1.1232 0 .74793.4684 1.06022 1.2951 1.13895l3.0875.21781c1.8869.14041 3.1347 1.13895 3.1347 3.15048 0 1.93408-1.3252 3.24368-3.2436 3.24368h-6.1921V9.83815h.0014ZM46.0576 6.42277c0-3.32237 2.4013-5.64488 5.6147-5.64488h.0315c3.2122 0 5.6305 2.32382 5.6305 5.64488 0 3.3368-2.417 5.67633-5.6305 5.67633h-.0315c-3.2121 0-5.6147-2.33953-5.6147-5.67633Zm5.6305 3.55593c1.98 0 3.4312-1.404 3.4312-3.54018 0-2.12044-1.4499-3.54019-3.4312-3.54019-1.9656 0-3.4156 1.41975-3.4156 3.54019 0 2.13618 1.45 3.54018 3.4156 3.54018ZM59.0635.96549h6.4715c2.2149 0 3.3224 1.18487 3.3224 3.08749 0 1.21636-.5774 2.19917-1.4972 2.46422.9513.10891 1.404.79517 1.404 1.62182v3.77378h-2.1991V8.65338c0-.57734-.1719-.9828-.9514-.9828h-4.3511v4.24222h-2.1991V.96548Zm6.1763 4.66338c.9985 0 1.404-.53011 1.404-1.30952 0-.84241-.4055-1.29379-1.4342-1.29379H61.264v2.60463h3.9771l-.0013-.00132Z" />
    </svg>
  ),
  enter: (props: LucideProps) => (
    <svg
      data-testid="geist-icon"
      height="16"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="16"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 3V2.25H15V3V10C15 10.5523 14.5523 11 14 11H3.56068L5.53035 12.9697L6.06068 13.5L5.00002 14.5607L4.46969 14.0303L1.39647 10.9571C1.00595 10.5666 1.00595 9.93342 1.39647 9.54289L4.46969 6.46967L5.00002 5.93934L6.06068 7L5.53035 7.53033L3.56068 9.5H13.5V3Z"
        fill="currentColor"
      />
    </svg>
  ),
  twitter: (props: LucideProps) => (
    <svg
      {...props}
      height="23"
      viewBox="0 0 1200 1227"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  ),
  logo: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.5-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
      />
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.9 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  lovableLogo: LovableLogo,
  sitebrewLogo: SitebrewLogo,
  workflowIcon: WorkflowIcon,
  windsurfTealLogo: WindsurfTealLogo,
  cursorLight: CursorLight,
  cursorDark: CursorDark,
  boltLogo: (props: LucideProps) => (
    <svg
      {...props}
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 51 21.9"
      fill="currentColor"
    >
      <path d="M24.1 19.3c-4.7 0-7-2.7-7-6.1s3.2-7.7 7.9-7.7 7 2.7 7 6.1-3.2 7.7-7.9 7.7Zm.2-4.3c1.6 0 2.7-1.5 2.7-3.1s-.8-2-2.2-2-2.7 1.5-2.7 3.1.8 2 2.2 2ZM37 19h-4.9l4-18.2H41l-4 18.1Z" />
      <path
        fillRule="evenodd"
        d="M9.6 19.3c-1.5 0-3-.5-3.8-1.7L5.5 19 0 21.9.6 19 4.6.8h4.9L8.1 7.2c1.1-1.2 2.2-1.7 3.6-1.7 3 0 4.9 1.9 4.9 5.5s-2.3 8.3-7 8.3Zm1.9-7.3c0 1.7-1.2 3-2.8 3s-1.7-.3-2.2-.9l.8-3.3c.6-.6 1.2-.9 2-.9 1.2 0 2.2.9 2.2 2.2Z"
      />
      <path d="M46.1 19.3c-2.8 0-4.9-1-4.9-3.3s0-.7.1-1l1.1-4.9h-2.2l1-4.2h2.2l.8-3.6L49.7 0l-.6 2.3-.8 3.6H51l-1 4.2h-2.7l-.7 3.2v.6c0 .6.4 1.1 1.2 1.1s.6 0 .7-.1v3.9c-.5.4-1.4.5-2.3.5Z" />
    </svg>
  ),
  v0Logo: (props: LucideProps) => (
    <svg
      {...props}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        d="M14.252 8.25h5.624c.088 0 .176.006.26.018l-5.87 5.87a1.889 1.889 0 01-.019-.265V8.25h-2.25v5.623a4.124 4.124 0 004.125 4.125h5.624v-2.25h-5.624c-.09 0-.179-.006-.265-.018l5.874-5.875a1.9 1.9 0 01.02.27v5.623H24v-5.624A4.124 4.124 0 0019.876 6h-5.624v2.25zM0 7.5v.006l7.686 9.788c.924 1.176 2.813.523 2.813-.973V7.5H8.25v6.87L2.856 7.5H0z"
      />
    </svg>
  ),
  terminal: TerminalIcon,
  clap: ClapIcon,

  discord: (props: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19.73 4.87a18.2 18.2 0 0 0-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 0 0 .96 17.7a18.43 18.43 0 0 0 5.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83ZM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27Zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27Z" />
    </svg>
  ),
  slash: (props: LucideProps) => (
    <svg
      data-testid="geist-icon"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9849 15.3939L11.6894 14.7046L5.68942 0.704556L5.39398 0.0151978L4.01526 0.606077L4.3107 1.29544L10.3107 15.2954L10.6061 15.9848L11.9849 15.3939Z"
        fill="currentColor"
      />
    </svg>
  ),
  logout: LogoutIcon,
  search: Search,
  replit: (props: LucideProps) => (
    <svg
      {...props}
      className={props.className}
      viewBox="0 0 793.8 871.5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#F5640C">
        <path d="M396.9,356.1H227.2c-16.6,0-30-13.4-30-30v-99.8c0-16.6,13.4-30,30-30h139.7c16.6,0,30,13.4,30,30V356.1z" />
        <path d="M566.6,515.8H396.9V356.1h169.7c16.5,0,29.9,13.4,29.9,29.9v99.8C596.5,502.4,583.1,515.8,566.6,515.8z" />
        <path d="M366.9,675.6H227.2c-16.5,0-29.9-13.4-29.9-29.9v-99.8c0-16.5,13.4-29.9,29.9-29.9h169.7v129.8C396.9,662.1,383.5,675.6,366.9,675.6z" />
      </g>
    </svg>
  ),
  replitWithText: (props: LucideProps) => (
    <svg
      viewBox="0 0 1005.6 468.5"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M405.5,198.5L401,203h-4.5l-1.4-5.7c-0.3-1.4-1.6-2.3-3.1-2.3h-28.8c-1.8,0-3.2,1.4-3.2,3v9.9 c0,1.7,1.4,3,3.2,3h17v46.4h-19.8c-1.8,0-3.2,1.4-3.2,3v9.9c0,1.7,1.4,3,3.2,3h62.3c1.8,0,3.2-1.4,3.2-3v-9.9c0-1.7-1.4-3-3.2-3 h-22.9v-32.8c0-9.2,5.4-14,16-14h17.2c1.8,0,3.2-1.4,3.2-3v-10.9c0-1.7-1.4-3-3.2-3h-10.2C415.3,193.5,409.4,194.9,405.5,198.5" />
      <path d="M483.2,193.5c-25.2,0-38.7,13.4-38.7,40.6c0,27.3,13.4,40.7,38.2,40.7c19.2,0,31.6-8,34.9-21.7 c0.5-1.9-1.1-3.7-3.1-3.7h-12c-1.3,0-2.5,0.8-3,2c-2.1,5.9-8.1,8.7-16.2,8.7c-12.6,0-18.6-6.9-19.4-23h54.7 C521.6,207,509.1,193.5,483.2,193.5 M464.5,224.9c1.9-11.8,7.8-17.3,18.6-17.3c11.5,0,16.9,6.1,17.2,17.3H464.5z" />
      <path d="M580.5,193.5c-6.8,0-11.7,1.5-15.5,5.1l-4.7,4.5h-4.3l-1.6-5.8c-0.4-1.3-1.6-2.3-3.1-2.3h-9 c-1.8,0-3.2,1.4-3.2,3v102.4c0,1.7,1.4,3,3.2,3h13.2c1.8,0,3.2-1.4,3.2-3v-22.2l-1.7-11.9l4.4-1l4.7,4.5c3.7,3.4,8.2,5.1,14.9,5.1 c19.4,0,31.1-13.4,31.1-40.7C612,206.9,600.4,193.5,580.5,193.5 M574,258.5c-9.9,0-15.4-5.1-15.4-14.8v-19.2 c0-9.7,5.4-14.8,15.4-14.8c12.1,0,17.6,7.6,17.6,24.3C591.5,250.9,586.1,258.5,574,258.5" />
      <path d="M852.8,207.9V198c0-1.7-1.4-3-3.2-3h-34.7v-19.2c0-1.7-1.4-3-3.2-3h-13.2c-1.8,0-3.2,1.4-3.2,3v19.2h-20.5 c-1.8,0-3.2,1.4-3.2,3v9.9c0,1.7,1.4,3,3.2,3h20.5v29.4c0,22.5,10.6,32.9,33.4,32.9h18.6c1.8,0,3.2-1.4,3.2-3v-9.9 c0-1.7-1.4-3-3.2-3h-15.6c-12.4,0-16.8-4.9-16.8-17.1v-29.2h34.7C851.4,210.9,852.8,209.5,852.8,207.9z" />
      <path d="M689.1,257.3h-20.4v-89.5c0-1.7-1.4-3-3.2-3h-40c-1.8,0-3.2,1.4-3.2,3v9.9c0,1.7,1.4,3,3.2,3h23.6v76.6h-26.5 c-1.8,0-3.2,1.4-3.2,3v9.9c0,1.7,1.4,3,3.2,3h66.5c1.8,0,3.2-1.4,3.2-3v-9.9C692.3,258.6,690.9,257.3,689.1,257.3z" />
      <path d="M748.5,164.8h-18c-1.8,0-3.2,1.4-3.2,3v12.7c0,1.7,1.4,3,3.2,3h18c1.8,0,3.2-1.4,3.2-3v-12.7 C751.6,166.1,750.2,164.8,748.5,164.8z" />
      <path d="M750.9,257.3V198c0-1.7-1.4-3-3.2-3h-40.3c-1.8,0-3.2,1.4-3.2,3v9.9c0,1.7,1.4,3,3.2,3h23.9v46.4h-23.9 c-1.8,0-3.2,1.4-3.2,3v9.9c0,1.7,1.4,3,3.2,3h68c1.8,0,3.2-1.4,3.2-3v-9.9c0-1.7-1.4-3-3.2-3H750.9z" />
      <path
        className="text-[#F5640C]"
        d="M222.2,206.4h-58.9c-5.8,0-10.4-4.7-10.4-10.4v-34.6c0-5.8,4.7-10.4,10.4-10.4h48.5c5.8,0,10.4,4.7,10.4,10.4 V206.4z"
      />
      <path
        className="text-[#F5640C]"
        d="M281.1,261.8h-58.9v-55.5h58.9c5.7,0,10.4,4.7,10.4,10.4v34.7C291.5,257.2,286.8,261.8,281.1,261.8z"
      />
      <path
        className="text-[#F5640C]"
        d="M211.8,317.3h-48.5c-5.7,0-10.4-4.7-10.4-10.4v-34.7c0-5.7,4.7-10.4,10.4-10.4h58.9v45.1 C222.2,312.6,217.5,317.3,211.8,317.3z"
      />
    </svg>
  ),
  magicPatterns: MagicPatternsLogo,
  sidebar: (props: LucideProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      role="img"
      focusable="false"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M15 5.25A3.25 3.25 0 0 0 11.75 2h-7.5A3.25 3.25 0 0 0 1 5.25v5.5A3.25 3.25 0 0 0 4.25 14h7.5A3.25 3.25 0 0 0 15 10.75v-5.5Zm-3.5 7.25H7v-9h4.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2Zm-6 0H4.25a1.75 1.75 0 0 1-1.75-1.75v-5.5c0-.966.784-1.75 1.75-1.75H5.5v9Z" />
    </svg>
  ),
  system: (props: LucideProps) => (
    <svg
      data-testid="geist-icon"
      height="16"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="16"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.5 3.25C0.5 1.45507 1.95507 0 3.75 0H8.25C10.0449 0 11.5 1.45507 11.5 3.25V11.25V12H10.75H1.25H0.5V11.25V3.25ZM3.75 1.5C2.7835 1.5 2 2.2835 2 3.25V10.5H10V3.25C10 2.2835 9.2165 1.5 8.25 1.5H3.75ZM3 3.5C3 2.94772 3.44772 2.5 4 2.5H8C8.55228 2.5 9 2.94772 9 3.5V7H3V3.5ZM6.5 9.5H9V8H6.5V9.5Z"
        fill="currentColor"
        transform="translate(2.5, 2)"
      />
    </svg>
  ),
  lightTheme: (props: LucideProps) => (
    <svg
      data-testid="geist-icon"
      height="16"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="16"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.75 1V0.25H6.25V1V1.25V2H7.75V1.25V1ZM7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9ZM7 10.5C8.933 10.5 10.5 8.933 10.5 7C10.5 5.067 8.933 3.5 7 3.5C5.067 3.5 3.5 5.067 3.5 7C3.5 8.933 5.067 10.5 7 10.5ZM7.75 12V12.75V13V13.75H6.25V13V12.75V12H7.75ZM12 6.25H12.75H13H13.75V7.75H13H12.75H12V6.25H1.25H0.5V7.75H1H1.25H2V6.25H1.25H1ZM10.0052 2.93414L10.5355 2.40381L10.7123 2.22703L11.2426 1.6967L12.3033 2.75736L11.773 3.28769L11.5962 3.46447L11.0659 3.9948L10.0052 2.93414ZM2.22703 10.7123L1.6967 11.2426L2.75736 12.3033L3.28769 11.773L3.46447 11.5962L3.9948 11.0659L2.93414 10.0052L2.40381 10.5355L2.22703 10.7123ZM2.93414 3.9948L2.40381 3.46447L2.22703 3.28769L1.6967 2.75736L2.75736 1.6967L3.28769 2.22703L3.46447 2.40381L3.9948 2.93414L2.93414 3.9948ZM10.7123 11.773L11.2426 12.3033L12.3033 11.2426L11.773 10.7123L11.5962 10.5355L11.0659 10.0052L10.0052 11.0659L10.5355 11.5962L10.7123 11.773Z"
        fill="currentColor"
        transform="translate(1.25, 1.25)"
      />
    </svg>
  ),
  darkTheme: (props: LucideProps) => (
    <svg
      data-testid="geist-icon"
      height="16"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      width="16"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 0.25V1V1.5H11L11.75 1.5V3H11H10.5V3.5V4.25H9V3.5V3H8.5H7.75V1.5H8.5H9V1V0.25H10.5ZM3.25514 2.75496C2.33413 3.53491 1.75 4.69972 1.75 6C1.75 8.34721 3.65279 10.25 6 10.25C7.30029 10.25 8.4651 9.66587 9.24505 8.74485C9.16377 8.74827 9.08207 8.74999 9 8.74999C5.82436 8.74999 3.25 6.17563 3.25 2.99999C3.25 2.91792 3.25172 2.83623 3.25514 2.75496ZM0.25 6C0.25 3.51072 1.83142 1.39271 4.042 0.592193L5.00256 1.55275C4.83933 2.00347 4.75 2.49047 4.75 2.99999C4.75 5.3472 6.65279 7.24999 9 7.24999C9.50953 7.24999 9.99653 7.16065 10.4473 6.99743L10.4473 6.99743Z"
        fill="currentColor"
        transform="translate(2.25, 2.25)"
      />
    </svg>
  ),
  creditCard: CreditCardIcon,
  calendar: CalendarIcon,
  settings: Settings,
  info: Info,
  layoutDashboard: LayoutDashboard,
  download: (props: LucideProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0303 8.03033C11.3232 7.73744 11.3232 7.26256 11.0303 6.96967C10.7374 6.67678 10.2626 6.67678 9.96967 6.96967L8.75 8.18934V3.75C8.75 3.33579 8.41421 3 8 3C7.58579 3 7.25 3.33579 7.25 3.75V8.18934L6.03033 6.96967C5.73744 6.67678 5.26256 6.67678 4.96967 6.96967C4.67678 7.26256 4.67678 7.73744 4.96967 8.03033L7.46967 10.5303C7.76256 10.8232 8.23744 10.8232 8.53033 10.5303L11.0303 8.03033ZM4.75 12C4.33579 12 4 12.3358 4 12.75C4 13.1642 4.33579 13.5 4.75 13.5H11.25C11.6642 13.5 12 13.1642 12 12.75C12 12.3358 11.6642 12 11.25 12H4.75Z"
        fill="currentColor"
      />
    </svg>
  ),
  copy: (props: LucideProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.2 4.5H6.8C7.3848 4.5 7.73319 4.50117 7.99145 4.52227C8.14907 4.53514 8.21532 4.55214 8.23308 4.55765C8.32235 4.60469 8.39531 4.67765 8.44235 4.76693C8.44786 4.78468 8.46486 4.85093 8.47773 5.00855C8.49635 5.23636 8.49945 5.53431 8.49992 6.0028C7.82492 6.01195 7.41969 6.05103 7.09202 6.21799C6.71569 6.40973 6.40973 6.71569 6.21799 7.09202C6.05103 7.41969 6.01195 7.82492 6.0028 8.49992C5.53431 8.49945 5.23636 8.49635 5.00855 8.47773C4.85093 8.46486 4.78468 8.44786 4.76692 8.44235C4.67765 8.39531 4.60469 8.32235 4.55765 8.23308C4.55214 8.21532 4.53514 8.14907 4.52227 7.99145C4.50117 7.73319 4.5 7.3848 4.5 6.8V6.2C4.5 5.6152 4.50117 5.26681 4.52227 5.00855C4.53514 4.85093 4.55214 4.78468 4.55765 4.76692C4.60469 4.67765 4.67765 4.60469 4.76692 4.55765C4.78468 4.55214 4.85093 4.53514 5.00855 4.52227C5.26681 4.50117 5.6152 4.5 6.2 4.5ZM6.00005 9.99995C5.01167 9.99918 4.49359 9.98663 4.09202 9.78201C3.71569 9.59027 3.40973 9.28431 3.21799 8.90798C3 8.48016 3 7.9201 3 6.8V6.2C3 5.0799 3 4.51984 3.21799 4.09202C3.40973 3.71569 3.71569 3.40973 4.09202 3.21799C4.51984 3 5.0799 3 6.2 3H6.8C7.9201 3 8.48016 3 8.90798 3.21799C9.28431 3.40973 9.59027 3.71569 9.78201 4.09202C9.98663 4.49359 9.99918 5.01167 9.99995 6.00005C10.9883 6.00082 11.5064 6.01337 11.908 6.21799C12.2843 6.40973 12.5903 6.71569 12.782 7.09202C13 7.51984 13 8.0799 13 9.2V9.8C13 10.9201 13 11.4802 12.782 11.908C12.5903 12.2843 12.2843 12.5903 11.908 12.782C11.4802 13 10.9201 13 9.8 13H9.2C8.0799 13 7.51984 13 7.09202 12.782C6.71569 12.5903 6.40973 12.2843 6.21799 11.908C6.01337 11.5064 6.00082 10.9883 6.00005 9.99995Z"
        fill="currentColor"
      />
    </svg>
  ),
  check: (props: LucideProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5762 5.01988C11.8414 5.33809 11.7984 5.81101 11.4802 6.07618C9.81811 7.46123 8.80104 9.18641 8.24647 10.376L8.23549 10.3996C8.12526 10.6361 8.02592 10.8492 7.93591 11.0111C7.85842 11.1505 7.71073 11.4047 7.44779 11.5571C7.14138 11.7347 6.80688 11.7748 6.46718 11.6746L6.67939 10.9552L6.46717 11.6746C6.18169 11.5904 5.98389 11.3897 5.87463 11.2724C5.75337 11.1423 5.61404 10.9682 5.46269 10.7789L5.44622 10.7583L4.41438 9.46854C4.15562 9.14509 4.20806 8.67312 4.53151 8.41437C4.85495 8.15561 5.32692 8.20805 5.58568 8.5315L6.61753 9.82131C6.67314 9.89083 6.72155 9.95125 6.76421 10.004C6.79939 9.92989 6.83972 9.84354 6.88694 9.74223C7.49532 8.4372 8.62867 6.49987 10.5199 4.92385C10.8381 4.65868 11.311 4.70167 11.5762 5.01988Z"
        fill="currentColor"
      />
    </svg>
  ),
  play: (props: LucideProps) => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 3.5L11 8L5 12.5V3.5Z" fill="currentColor" />
    </svg>
  ),
}
