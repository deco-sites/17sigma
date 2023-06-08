import { JSX } from "preact";

import { useEffect, useRef, useState } from "preact/hooks";
import { FaChevronDown, FaChevronRight, FaSearch } from "react-icons/fa";

import Container from "../components/Container.tsx";
import { Select } from "../components/Select.tsx";
import { PartnerProps } from "../components/Partner.tsx";
import { ButtonFilterSelect } from "../components/ButtonFilterSelect.tsx";
import Partner from "../components/Partner.tsx";
import dataParterns from "../data/paterns.ts";

import {
  accentuationReplaceText,
  filteringTextValue,
  orderArrayAZ,
} from "../helpers/index.ts";

export interface Props {
  partners: PartnerProps[];
}

type TypesFilter = "country" | "category";

export default function FilterPartners(props: Props) {
  const mobileWidth = window.innerWidth <= 768;

  const filterArea = useRef<HTMLDivElement>(null);
  const search = useRef<HTMLDivElement>(null);

  const [partners] = useState<Array<PartnerProps>>(
    Array.isArray(props.partners) ? props.partners : dataParterns,
  );
  const countrys = Array.from(new Set(partners.map((item) => item.country)))
    .sort();
  const categorys = Array.from(new Set(partners.map((item) => item.category)))
    .sort();

  const [filteredCountry, setFilteredCountry] = useState<string | undefined>();
  const [filteredCategory, setFilteredCategory] = useState<
    string | undefined
  >();
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [orderNames, setOrderNames] = useState<string[]>(
    Array.from(new Set(partners.map((item) => item.category))),
  );
  const [partnerList, setPartnerList] = useState<HTMLElement | null>();

  const handlerFilterPerTypes = (type: TypesFilter, search: string) => {
    console.log(filteredCountry, filteredCategory);
    selectedFilter(type, search);

    if (partnerList?.children) {
      const partnerFilter = Array.from(partnerList.children);

      switch (type) {
        case "category":
          setFilteredCategory(search);
          partnerFilter.map((partner) => {
            const currentPartner = partner as HTMLAnchorElement;
            const currentFilter = currentPartner.dataset[type]?.includes(
              search,
            );

            if (!filteredCountry && currentFilter) {
              currentPartner.classList.remove("hidden");
            } else if (
              filteredCountry && currentFilter &&
              currentPartner.dataset["country"]?.includes(filteredCountry)
            ) {
              currentPartner.classList.remove("hidden");
            } else {
              currentPartner.classList.add("hidden");
            }
          });

          break;

        case "country":
          setFilteredCountry(search);
          partnerFilter.map((partner) => {
            const currentPartner = partner as HTMLAnchorElement;
            const currentFilter = currentPartner.dataset[type]?.includes(
              search,
            );
            // console.log(currentFilter,type,partner)
            if (!filteredCategory && currentFilter) {
              currentPartner.classList.remove("hidden");
            } else if (
              filteredCategory && currentFilter &&
              currentPartner.dataset["category"]?.includes(filteredCategory)
            ) {
              currentPartner.classList.remove("hidden");
            } else {
              currentPartner.classList.add("hidden");
            }
          });
          break;

        default:
          setFilteredCountry(undefined);
          setFilteredCategory(undefined);
          break;
      }
    }
  };

  const handlerFilterAll = (type: TypesFilter) => {
    selectedFilter(type);

    if (partnerList?.children) {
      const partnerFilter = Array.from(partnerList.children);

      switch (type) {
        case "category":
          setFilteredCategory(undefined);
          partnerFilter.map((partner) => {
            const currentPartner = partner as HTMLAnchorElement;
            if (
              filteredCountry &&
              currentPartner.dataset["country"]?.includes(filteredCountry)
            ) {
              currentPartner.classList.remove("hidden");
            } else if (!filteredCountry) {
              currentPartner.classList.remove("hidden");
            }
          });

          break;

        case "country":
          setFilteredCountry(undefined);
          if (partnerList?.children) {
            Array.from(partnerList.children).map((partner) => {
              const currentpartner = partner as HTMLAnchorElement;
              if (
                filteredCategory &&
                currentpartner.dataset["category"]?.includes(filteredCategory)
              ) {
                currentpartner.classList.remove("hidden");
              } else if (!filteredCategory) {
                currentpartner.classList.remove("hidden");
              }
            });
          }
          break;

        default:
          if (partnerList?.children) {
            Array.from(partnerList.children).map((partner) => {
              const currentpartner = partner as HTMLAnchorElement;
              currentpartner.classList.remove("hidden");
            });
          }
          break;
      }
    }
  };

  const handlerFilterPerName = (search: string) => {
    let countFiltered = 0;
    resetFilter();

    if (search.length >= 1) {
      if (partnerList?.children) {
        Array.from(partnerList.children).map((partner) => {
          const currentpartner = partner as HTMLAnchorElement;

          const country = currentpartner.dataset["country"];
          const name = currentpartner.dataset["name"];
          const category = currentpartner.dataset["category"];

          if (
            country && name && category &&
            filteringTextValue(category + country + name, search)
          ) {
            currentpartner.classList.remove("hidden");
            countFiltered++;
          } else {
            countFiltered = 0;
            currentpartner.classList.add("hidden");
          }
        });
      }
    } else {
      if (partnerList?.children) {
        Array.from(partnerList.children).map((partner) => {
          const currentpartner = partner as HTMLAnchorElement;
          countFiltered++;
          currentpartner.classList.remove("hidden");
        });
      }
    }
  };

  const resetFilter = () => {
    setFilteredCategory(undefined);
    setFilteredCountry(undefined);
    selectedFilter("country");
    selectedFilter("category");
  };

  const handlerToggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handlerOpenSearch = () => {
    setShowSearch(true);
  };

  const onCloseSearchOutside = (evt: MouseEvent) => {
    if (
      search.current && !search.current.contains(evt.target as HTMLDivElement)
    ) {
      setShowSearch(false);
    }
  };

  const onCloseFilterOutside = (evt: MouseEvent) => {
    if (showFilter) {
      if (
        filterArea.current &&
        !filterArea.current.contains(evt.target as HTMLDivElement)
      ) {
        setShowFilter(false);
      }
    }
  };

  const selectedFilter = (filter: string, select?: string) => {
    const filters = document.querySelectorAll(
      `[data-filter='${filter}'] button > span`,
    );

    if (filters) {
      filters.forEach((item) => {
        const filter = accentuationReplaceText(item.innerHTML)
          .toLocaleLowerCase();

        if (
          select &&
          filter.includes(accentuationReplaceText(select).toLocaleLowerCase())
        ) {
          item.classList.add("border-b-landing-primary");
          item.classList.add("border-b-[1px]");
          item.ariaSelected = "true";
        } else if (!select && filter.includes("all")) {
          item.classList.add("border-b-landing-primary");
          item.classList.add("border-b-[1px]");
          item.ariaSelected = "true";
        } else {
          item.classList.remove("border-b-landing-primary");
          item.classList.remove("border-b-[1px]");
          item.ariaSelected = "false";
        }
      });
    }
  };

  const getOrderFilterAZ = (target: PartnerProps[]) => {
    const order: string[] = [];

    target.map((patner) => {
      order.push(patner.name);
    });

    return orderArrayAZ(order);
  };

  useEffect(() => {
    selectedFilter("country");
    selectedFilter("category");
    setOrderNames(getOrderFilterAZ(partners));
    setPartnerList(document.getElementById("partner-list"));
  }, []);

  useEffect(() => {
    document.addEventListener("click", onCloseSearchOutside);
    document.addEventListener("click", onCloseFilterOutside);

    return (() => {
      document.removeEventListener("click", onCloseFilterOutside);
      document.removeEventListener("click", onCloseSearchOutside);
    });
  }, [showFilter, search]);

  return (
    <div className="relative text-landing-primary">
      <div
        id="filterArea"
        ref={filterArea}
        className="pt-16 pb-16 w-full absolute top-0 left-0 z-10"
        style={{
          backgroundColor: `${
            showFilter ? "rgba(43, 42, 48, 0.9)" : "transparent"
          }`,
        }}
      >
        <Container>
          <div className="flex gap-8 justify-between w-full flex-wrap">
            <div
              className={(mobileWidth && showSearch ? "hidden" : "flex") +
                "  flex-1 gap-8 justify-center items-start w-full md:max-w-fit "}
            >
              <Select
                label="Category"
                filterName="category"
                active={showFilter}
                onClick={handlerToggleFilter}
              >
                <ButtonFilterSelect
                  title="All"
                  onClick={() => handlerFilterAll("category")}
                  aria-selected={true}
                />
                {categorys.map((category) => (
                  <ButtonFilterSelect
                    title={category}
                    onClick={() => handlerFilterPerTypes("category", category)}
                    aria-selected={false}
                  />
                ))}
              </Select>
              <Select
                label="HQ"
                filterName="country"
                active={showFilter}
                onClick={handlerToggleFilter}
              >
                <ButtonFilterSelect
                  title="All"
                  onClick={() => handlerFilterAll("country")}
                  aria-selected={true}
                />
                {countrys.map((country) => (
                  <ButtonFilterSelect
                    title={country}
                    onClick={() => handlerFilterPerTypes("country", country)}
                    aria-selected={false}
                  />
                ))}
              </Select>
            </div>
            <div
              className={"flex justify-end " +
                (showSearch && mobileWidth ? "flex-1" : "")}
            >
              <div
                ref={search}
                onClick={handlerOpenSearch}
                className={(showSearch
                  ? "pr-[1.875rem] pl-[1.875rem] justify-between "
                  : "p-0 justify-center ") +
                  (showSearch && mobileWidth ? "flex-1" : "") +
                  " cursor-pointer flex items-center w-[3.5625rem] max-w-full min-w-fit border-[1px] h-[3.5625rem] rounded-full "}
              >
                {showSearch &&
                  (
                    <input
                      className="appearance-none h-full bg-transparent outline-none text-white"
                      type="text"
                      name="searchPartners"
                      id="search"
                      onKeyUp={({ currentTarget }) =>
                        handlerFilterPerName(currentTarget.value)}
                    />
                  )}
                <FaSearch size={14} />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div
          id="partner-list"
          className={(showFilter ? " pointer-events-none " : "") +
            "grid grid-cols-2 gap-y-12 gap-x-24 pl-14 pr-14 min-h-[450px] md:gap-y-0 md:pl-0 md:pr-0 md:gap-x-0 md:grid-cols-3 pt-48"}
        >
          {orderNames.map((name) => {
            return partners.map((partner) => {
              if (partner.name === name) {
                return (
                  <Partner
                    data-name={partner.name}
                    data-category={partner.category}
                    data-country={partner.country}
                    {...partner}
                  />
                );
              }
            });
          })}
        </div>
      </Container>
    </div>
  );
}
