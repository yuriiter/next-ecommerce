import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useRef,
  useState,
} from "react";
import { SearchFilterIcon, SearchIcon } from "../../../svg/icons";
import { cn } from "@/utils";
import { Tooltip } from "@/components/Tooltip/Tooltip";

type SearchProps = {
  className?: string;
};

export const Search = ({ className }: SearchProps) => {
  const [searchValue, setSearchValue] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  //   const searchIconRef = useRef<SVGSVGElement>(null);
  //   const filterIconRef = useRef<SVGSVGElement>(null);

  const handleClickOnWrapper: MouseEventHandler<HTMLDivElement> = (e) => {
    const { current: input } = inputRef;
    if (!input) return;
    // const { current: searchIcon } = searchIconRef;
    // const { current: filterIcon } = filterIconRef;

    // if (e.currentTarget !== searchIcon && e.currentTarget !== filterIcon)
    input.focus();
  };

  const stopPropagation: MouseEventHandler<SVGSVGElement> = (e) =>
    e.stopPropagation();

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setSearchValue(e.currentTarget.value);

  return (
    <div className={cn(["search", className])} onClick={handleClickOnWrapper}>
      <Tooltip content="Search">
        <SearchIcon
          className="search__icon"
          // ref={searchIconRef}
          onClick={stopPropagation}
        />
      </Tooltip>
      <input
        placeholder="Search something here"
        ref={inputRef}
        className="search__input"
        value={searchValue}
        onChange={handleInputChange}
      />
      <Tooltip content="Filtering">
        <SearchFilterIcon
          className="search__icon"
          // ref={filterIconRef}
          onClick={stopPropagation}
        />
      </Tooltip>
    </div>
  );
};
