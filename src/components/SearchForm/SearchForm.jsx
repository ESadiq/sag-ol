import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import "./search-form.css";
import { useTranslation } from 'react-i18next';

const SearchForm = ({ products, setFilteredProducts }) => {
    const { t } = useTranslation();

    const searchHandler = (e) => {
        const searchValue = e.target.value.toLowerCase();
        if (searchValue !== "") {
            const filtered = products.filter(item =>
                item.title.toLowerCase().includes(searchValue)
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]);
        }
    };

    return (
        <div className="search-form">
            <input onChange={searchHandler} type="text" placeholder={t('search')} />
            <CiSearch />
        </div>
    );
};

export default SearchForm;

