import { useState } from "react";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, ChevronDownIcon } from "@radix-ui/react-icons";

import "./Dropdown.css";

const Dropdown = () => {
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(false);

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="DropdownMenuTrigger" asChild>
        <button className="DropdownMenuButton" aria-label="Customise options">
          Options
          <div className="DropdownMenuButtonIcon">
            <ChevronDownIcon />
          </div>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item className="DropdownMenuItem">New Tab</DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">New Window</DropdownMenu.Item>

          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
              Favorites
              <div className="RightSlot">
                <ChevronRightIcon />
              </div>
            </DropdownMenu.SubTrigger>
            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                className="DropdownMenuSubContent"
                sideOffset={2}
                alignOffset={-5}
              >
                <a target="_blank" rel="noopener" href="https://github.com/">
                  <DropdownMenu.Item className="DropdownMenuItem">Github</DropdownMenu.Item>
                </a>

                <a target="_blank" rel="noopener" href="https://google.com/">
                  <DropdownMenu.Item className="DropdownMenuItem">Google</DropdownMenu.Item>
                </a>
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>

          <DropdownMenu.Item className="DropdownMenuItem">Downloads</DropdownMenu.Item>

          <DropdownMenu.Separator className="DropdownMenuSeparator" />

          <DropdownMenu.CheckboxItem
            className="DropdownMenuCheckboxItem"
            checked={bookmarksChecked}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Toolbar
          </DropdownMenu.CheckboxItem>
          <DropdownMenu.CheckboxItem
            className="DropdownMenuCheckboxItem"
            checked={urlsChecked}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
              <CheckIcon />
            </DropdownMenu.ItemIndicator>
            Show Full URLs
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Dropdown;
