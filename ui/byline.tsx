import { Logo } from '@/ui/logo';

export default function Byline({ className }: { className: string }) {
  return (
    <div
      className={`${className} bg-ht-border-gradient inset-x-0 bottom-3 mx-3 rounded-lg p-px shadow-lg shadow-black/20`}
    >
      <div className="flex flex-col justify-between space-y-2 rounded-lg bg-black p-3.5 lg:px-5 lg:py-3">
        <div className="flex items-center gap-x-1.5">
          <div className="text-sm text-gray-400">By</div>
          <a
            href="https://hastoggle.dev"
            title="hasToggle"
            target="_blank"
            rel="noreferrer"
          >
            <div className="">
              <Logo className="inline-block h-4 w-auto" />
            </div>
          </a>
        </div>

        <div className="text-sm text-gray-400">
          <a
            className="underline decoration-dotted underline-offset-4 transition-colors hover:text-gray-300"
            href="https://github.com/hasToggle/how-usestate-works"
            title="GitHub repository"
            target="_blank"
            rel="noreferrer"
          >
            View code
          </a>
        </div>
      </div>
    </div>
  );
}
