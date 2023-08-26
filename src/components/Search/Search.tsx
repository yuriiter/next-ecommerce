import React, {
  ChangeEventHandler,
  MouseEventHandler,
  useRef,
  useState,
} from "react";
import styles from "@/styles/components/Search.module.scss";
import { SearchFilterIcon, SearchIcon } from "../icons";

export const Search = () => {
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
    <div className={styles.search} onClick={handleClickOnWrapper}>
      <SearchIcon
        className={styles["search__magnifier-icon"]}
        // ref={searchIconRef}
        onClick={stopPropagation}
      />
      <input
        placeholder="Search something here"
        ref={inputRef}
        className={styles.search__input}
        value={searchValue}
        onChange={handleInputChange}
      />
      <SearchFilterIcon
        className={styles["search__filter-icon"]}
        // ref={filterIconRef}
        onClick={stopPropagation}
      />
    </div>
  );
};
