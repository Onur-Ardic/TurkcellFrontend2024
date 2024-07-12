"use client"
import { convertStringToQueriesObject, checkValidQuery, convertValidStringQueries } from '@/lib/helpers';
import {
  ApplyFilterButton,
  ClearButton,
  ColorOption,
  FilterButton,
  FilterContainer,
  FilterHeader,
  FilterInlineText,
  ProductSize,
  StyledIcon,
  StyledRangeSlider
} from '@/styles/FilterStyle';
import { useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { BiChevronRight, BiChevronUp } from 'react-icons/bi';
import { VscClearAll } from 'react-icons/vsc';
import 'react-range-slider-input/dist/style.css';

const Filter = () => {
  const t = useTranslations();

  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedFilterQueries, setSelectedFilterQueries] = useState({});
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    const paramsObj = convertStringToQueriesObject(searchParams);
    setSelectedFilterQueries(paramsObj);
  }, [searchParams]);

  const handleSelectFilterOptions = (name, value) => {
    let selectedQueries = selectedFilterQueries;

    if (selectedQueries[name]) {
      if (selectedQueries[name].includes(value)) {
        selectedQueries[name] = selectedQueries[name].filter(
          (query) => query !== value
        );
        if (!checkValidQuery(selectedQueries[name])) {
          delete selectedQueries[name];
        }
      } else {
        selectedQueries[name].push(value);
      }
    } else if (selectedQueries) {
      selectedQueries[name] = [value];
    }

    router.push(`?${convertValidStringQueries(selectedQueries)}`, {
      scroll: false,
    });
  };


  const categories = [
    { name: t('tshirts'), value: 't-shirts' },
    { name: t("shorts"), value: "shorts" },
    { name: t("shirts"), value: "shirts" },
    { name: t("hoodie"), value: "hoodie" },
    { name: t("jeans"), value: "jeans" },
  ]

  const colors = {
    green: "#00C12B",
    red: "#F50606",
    yellow: "#F5DD06",
    orange: "#F57906",
    lightskyblue: "#06CAF5",
    blue: "#063AF5",
    purple: "#7D06F5",
    pink: "#F506A4",
    white: "#ffffff",
    black: "#000000"
  }
  const sizes = [
    t('xxsmall'),
    t('xsmall'),
    t('small'),
    t('medium'),
    t('large'),
    t('xlarge'),
    t('xxlarge'),
    t('xxxlarge'),
    t('xxxxlarge'),
  ]

  const dressStyles = [
    { name: t('casual'), value: 'casual' },
    { name: t('formal'), value: 'formal' },
    { name: t('party'), value: 'party' },
    { name: t('gym'), value: 'gym' },
  ]

  const setCategory = (category) =>
    handleSelectFilterOptions("category_like", category.toLowerCase());
  const setPrice = (price) => setPriceRange(price);
  const setColor = (colorName) =>
    handleSelectFilterOptions("colors_like", colorName.toLowerCase());
  const setSize = (size) =>
    handleSelectFilterOptions("sizes_like", size.toLowerCase());
  const setDressStyle = (dressStyle) =>
    handleSelectFilterOptions("dressStyle_like", dressStyle.toLowerCase());

  const clearFilters = () => {
    setSelectedFilterQueries({});
    setPriceRange([0, 1000]);
    router.push("shop", { scroll: false });
  };

  const applyAllFilters = () => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("price_gte", priceRange[0]);
    searchParams.set("price_lte", priceRange[1]);
    router.replace(`?${searchParams.toString()}`, { scroll: false });
  };


  return (
    <>
      <FilterContainer>
        <FilterHeader className='d-flex justify-content-between align-items-center border-bottom pb-3'>
          {t('filter')}
          <ClearButton onClick={clearFilters} className='d-none d-md-block'>
            <StyledIcon className='p-0'>
              <VscClearAll />
            </StyledIcon>
          </ClearButton>
          <ClearButton className='d-block d-md-none' data-bs-toggle="modal" data-bs-target="#filterModal">
            <StyledIcon className='p-0'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 25" fill="none">
                <path d="M13.125 12.125V20.75C13.125 21.0484 13.0065 21.3345 12.7955 21.5455C12.5845 21.7565 12.2984 21.875 12 21.875C11.7016 21.875 11.4155 21.7565 11.2045 21.5455C10.9935 21.3345 10.875 21.0484 10.875 20.75V12.125C10.875 11.8266 10.9935 11.5405 11.2045 11.3295C11.4155 11.1185 11.7016 11 12 11C12.2984 11 12.5845 11.1185 12.7955 11.3295C13.0065 11.5405 13.125 11.8266 13.125 12.125ZM18.75 18.5C18.4516 18.5 18.1655 18.6185 17.9545 18.8295C17.7435 19.0405 17.625 19.3266 17.625 19.625V20.75C17.625 21.0484 17.7435 21.3345 17.9545 21.5455C18.1655 21.7565 18.4516 21.875 18.75 21.875C19.0484 21.875 19.3345 21.7565 19.5455 21.5455C19.7565 21.3345 19.875 21.0484 19.875 20.75V19.625C19.875 19.3266 19.7565 19.0405 19.5455 18.8295C19.3345 18.6185 19.0484 18.5 18.75 18.5ZM21 14.75H19.875V4.25C19.875 3.95163 19.7565 3.66548 19.5455 3.4545C19.3345 3.24353 19.0484 3.125 18.75 3.125C18.4516 3.125 18.1655 3.24353 17.9545 3.4545C17.7435 3.66548 17.625 3.95163 17.625 4.25V14.75H16.5C16.2016 14.75 15.9155 14.8685 15.7045 15.0795C15.4935 15.2905 15.375 15.5766 15.375 15.875C15.375 16.1734 15.4935 16.4595 15.7045 16.6705C15.9155 16.8815 16.2016 17 16.5 17H21C21.2984 17 21.5845 16.8815 21.7955 16.6705C22.0065 16.4595 22.125 16.1734 22.125 15.875C22.125 15.5766 22.0065 15.2905 21.7955 15.0795C21.5845 14.8685 21.2984 14.75 21 14.75ZM5.25 15.5C4.95163 15.5 4.66548 15.6185 4.4545 15.8295C4.24353 16.0405 4.125 16.3266 4.125 16.625V20.75C4.125 21.0484 4.24353 21.3345 4.4545 21.5455C4.66548 21.7565 4.95163 21.875 5.25 21.875C5.54837 21.875 5.83452 21.7565 6.0455 21.5455C6.25647 21.3345 6.375 21.0484 6.375 20.75V16.625C6.375 16.3266 6.25647 16.0405 6.0455 15.8295C5.83452 15.6185 5.54837 15.5 5.25 15.5ZM7.5 11.75H6.375V4.25C6.375 3.95163 6.25647 3.66548 6.0455 3.4545C5.83452 3.24353 5.54837 3.125 5.25 3.125C4.95163 3.125 4.66548 3.24353 4.4545 3.4545C4.24353 3.66548 4.125 3.95163 4.125 4.25V11.75H3C2.70163 11.75 2.41548 11.8685 2.2045 12.0795C1.99353 12.2905 1.875 12.5766 1.875 12.875C1.875 13.1734 1.99353 13.4595 2.2045 13.6705C2.41548 13.8815 2.70163 14 3 14H7.5C7.79837 14 8.08452 13.8815 8.2955 13.6705C8.50647 13.4595 8.625 13.1734 8.625 12.875C8.625 12.5766 8.50647 12.2905 8.2955 12.0795C8.08452 11.8685 7.79837 11.75 7.5 11.75ZM14.25 7.25H13.125V4.25C13.125 3.95163 13.0065 3.66548 12.7955 3.4545C12.5845 3.24353 12.2984 3.125 12 3.125C11.7016 3.125 11.4155 3.24353 11.2045 3.4545C10.9935 3.66548 10.875 3.95163 10.875 4.25V7.25H9.75C9.45163 7.25 9.16548 7.36853 8.9545 7.5795C8.74353 7.79048 8.625 8.07663 8.625 8.375C8.625 8.67337 8.74353 8.95952 8.9545 9.1705C9.16548 9.38147 9.45163 9.5 9.75 9.5H14.25C14.5484 9.5 14.8345 9.38147 15.0455 9.1705C15.2565 8.95952 15.375 8.67337 15.375 8.375C15.375 8.07663 15.2565 7.79048 15.0455 7.5795C14.8345 7.36853 14.5484 7.25 14.25 7.25Z" fill="black" fillOpacity="0.4" />
              </svg>
            </StyledIcon>
          </ClearButton>
        </FilterHeader>
        <ul className="list-unstyled d-flex flex-column pb-3 mb-3 mt-3 border-bottom gap-1">
          {categories.map((category, i) => (
            <FilterButton
              key={i}
              className="d-flex justify-content-between"
              selected={selectedFilterQueries?.category_like?.includes(
                category.value.toLocaleLowerCase()
              )}
              onClick={() => setCategory(category.value)}
            >
              <FilterInlineText>
                {category.name}
              </FilterInlineText>
              <BiChevronRight size={24} />
            </FilterButton>
          ))}
        </ul>
        <FilterHeader className='d-flex justify-content-between'>
          {t('filterPrice')}
          <BiChevronUp size={24} />
        </FilterHeader>
        <StyledRangeSlider
          min={0}
          max={1000}
          value={priceRange}
          onInput={setPrice}
          className="mb-3"
        />
        <div className="mb-4 d-flex justify-content-between">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
        <FilterHeader className='d-flex justify-content-between pb-3 border-bottom'>
          {t('filterColor')}
          <BiChevronUp size={24} />
        </FilterHeader>
        <div className="py-3 border-bottom mb-3 d-flex gap-1 justify-content-between flex-wrap">
          {Object.entries(colors).map(([colorName, color]) => (
            <ColorOption
              key={color}
              name="color"
              value={colorName.toLowerCase()}
              color={color}
              selected={selectedFilterQueries?.colors_like?.includes(
                colorName.toLocaleLowerCase()
              )}
              onClick={() => setColor(colorName)}
            />
          ))}
        </div>
        <FilterHeader className='d-flex justify-content-between pb-3'>
          {t('filterSize')}
          <BiChevronUp size={24} />
        </FilterHeader>
        <div className="pb-3 border-bottom mb-3 d-flex gap-1 justify-content-start flex-wrap">
          {sizes.map((size, i) => (
            <div className=''>
              <ProductSize
                key={i}
                name="size"
                value={size}
                selected={selectedFilterQueries?.sizes_like?.includes(
                  size.toLocaleLowerCase()
                )}
                onClick={() => setSize(size)}
              >
                {size}
              </ProductSize>
            </div>
          ))}
        </div>
        <FilterHeader className='d-flex justify-content-between pb-3'>
          {t('dressStyle')}
          <BiChevronUp size={24} />
        </FilterHeader>
        <ul className="list-unstyled d-flex flex-column mb-3 gap-1">
          {dressStyles.map((dressStyle, i) => (
            <FilterButton
              key={i}
              name="dressStyle"
              className="d-flex justify-content-between"
              selected={selectedFilterQueries?.dressStyle_like?.includes(
                dressStyle.value.toLocaleLowerCase()
              )}
              onClick={() => {
                setDressStyle(dressStyle.value);
              }}
            >
              <FilterInlineText>
                {dressStyle.name}
              </FilterInlineText>
              <BiChevronRight size={24} />
            </FilterButton>
          ))}
        </ul>
        <ApplyFilterButton onClick={applyAllFilters} className='d-none d-md-block' >
          {t('applyFilter')}
        </ApplyFilterButton>
        <ApplyFilterButton onClick={applyAllFilters} className='d-block d-md-none' data-bs-toggle="modal" data-bs-target="#filterModal">
          {t('applyFilter')}
        </ApplyFilterButton>
      </FilterContainer>
    </>
  )
}

export default Filter