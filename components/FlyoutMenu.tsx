import { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function FlyoutMenu({
  items,
  title,
  mainlink,
}: {
  items: any[];
  title?: string;
  mainlink?: string;
}) {
  return (
    <Popover className="relative">
      <Popover.Button className="focus:outline-none inline-flex items-center gap-x-1 text-sm font-semibold leading-6 duration-200 transition-colors text-zinc-700 hover:text-cyan-500">
        <Link href={mainlink as unknown as URL}>{title}</Link>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 mt-5 flex px-4">
          <div className="w-fit flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-0">
            <div className="p-4">
              {items.map((item) => (
                <div
                  key={item.name}
                  className="relative flex items-center justify-start gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                >
                  <div>
                    <Link
                      href={item.href}
                      className="font-semibold text-zinc-700 hover:text-cyan-500 duration-200 transition-colors"
                    >
                      {item.name}
                      <span className="absolute inset-0" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
