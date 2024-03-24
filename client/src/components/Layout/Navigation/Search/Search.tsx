import React, {
  ChangeEventHandler,
  FormEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { SearchFilterIcon, SearchIcon } from "../../../svg/icons";
import { cn } from "@/utils";
import { Tooltip } from "@/components/Tooltip/Tooltip";
import { useRouter } from "next/router";
import { useSidebar } from "@/components/Sidebar/useSidebar";

type SearchProps = {
  className?: string;
};

export const Search = ({ className }: SearchProps) => {
  const router = useRouter();
  const searchValueFromQuery = router.query.search;
  const [searchValue, setSearchValue] = useState(searchValueFromQuery ?? "");
  const { setHidden } = useSidebar();

  useEffect(() => {
    setSearchValue(searchValueFromQuery ?? "");
  }, [searchValueFromQuery]);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickOnWrapper: MouseEventHandler<HTMLFormElement> = () => {
    const { current: input } = inputRef;
    if (!input) return;
    input.focus();
  };

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setSearchValue(e.currentTarget.value);

  const submit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (searchValue === "") return;
    router.replace({
      pathname: "/cars",
      query: { search: searchValue },
    });
  };

  const handleSearch: MouseEventHandler<SVGSVGElement> = (e) => {
    e.stopPropagation();
    submit();
  };

  const openFilterSidebar: MouseEventHandler<SVGSVGElement> = (e) => {
    e.stopPropagation();
    setHidden(false);
    router.replace({ pathname: "/cars" });
  };

  return (
    <form
      className={cn(["search", className])}
      onSubmit={submit}
      onClick={handleClickOnWrapper}
    >
      <Tooltip content="Search">
        <SearchIcon className="search__icon" onClick={handleSearch} />
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
          onClick={openFilterSidebar}
          className="search__icon"
        />
      </Tooltip>
    </form>
  );
};
