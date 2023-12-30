// NextJS Imports
import Link from "next/link";
import { usePathname } from "next/navigation";

// Radix UI Imports
import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as Accordion from "@radix-ui/react-accordion";

import { pages } from "@/services/pages/pages";

const SidebarContent = () => {
  const pathname = usePathname();
  const urlRoot = pathname.split("/");

  return (
    <Accordion.Root
      type="multiple"
      className="text-main-title-dark dark:text-main-title-light w-64 dark:bg-gray-800"
      defaultValue={[urlRoot[1]]}
    >
      {pages.map((page) => {
        return (
          <Accordion.AccordionItem
            key={page.root}
            id={`${page.root}-root`}
            data-test={`${page.root}-root`}
            value={page.root}
            className="text-main-title-dark dark:text-main-title-light border-b-2 dark:border-b-gray-800"
          >
            <Accordion.AccordionHeader>
              <Accordion.AccordionTrigger className="AccordionTrigger flex h-full w-full items-center justify-between p-3 text-base">
                {page.level}
                <ChevronDownIcon className="AccordionChevron" aria-hidden />
              </Accordion.AccordionTrigger>
            </Accordion.AccordionHeader>
            <Accordion.AccordionContent className="AccordionContent">
              {page.contents.map((link) => {
                const pageLink = `/${page.root}/${link.link}`;
                return (
                  <Link
                    key={link.name}
                    id={`${link.link}-link`}
                    data-test={`${link.link}-link`}
                    aria-current={pathname === pageLink ? "page" : "false"}
                    data-current={pathname === pageLink ? "page" : "false"}
                    href={pageLink}
                    className={`block p-3 pl-8 text-sm last-of-type:pb-6 hover:underline ${
                      pathname === pageLink
                        ? "text-main-identity dark:text-main-title-light font-medium"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </Accordion.AccordionContent>
          </Accordion.AccordionItem>
        );
      })}
    </Accordion.Root>
  );
};

export default SidebarContent;
