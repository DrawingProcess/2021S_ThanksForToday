import React from "react";
import "./SearchBar.scss";

const SearchBar = ({
	searchSelect,
	searchType,
	searchWord,
	handleChange,
	searchFunc,
}) => {
	return (
		<div className="search">
			<select value={searchType} id="searchType" onChange={handleChange}>
				<option value="">검색 조건</option>
				{searchSelect &&
					searchSelect.map((type) => {
						return (
							<option key={type.searchType} value={type.searchType}>
								{type.text}
							</option>
						);
					})}
			</select>
			<div className="searchbar">
				<input
					id="searchWord"
					value={searchWord}
					onChange={handleChange}
					placeholder="#해시태그를 이용해 정리할 수 있습니다."
				/>
			</div>
		</div>
	);
};

export default SearchBar;
