import { useState } from "react";

function Dropdown() {
    const [selectedOption, setSelectedOption] = useState("white");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const options = [{ optionValue: 'red', optionText: 'Red' },
    { optionValue: 'green', optionText: 'Green' },
    { optionValue: 'blue', optionText: 'Blue' },
    { optionValue: 'yellow', optionText: 'Yellow' },
    { optionValue: 'purple', optionText: 'Purple' },
    { optionValue: 'orange', optionText: 'Orange' },
    { optionValue: 'pink', optionText: 'Pink' },
    { optionValue: 'brown', optionText: 'Brown' },
    { optionValue: 'teal', optionText: 'Teal' },
    { optionValue: 'cyan', optionText: 'Cyan' }
    ];

    const handleHover = () => {
        setIsDropdownOpen(true)
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false)
    };

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
        setIsDropdownOpen(false)
        document.body.classList.remove('bg-red', 'bg-green', 'bg-blue', 'bg-yellow', 'bg-purple', 'bg-orange', 'bg-pink', 'bg-brown', 'bg-teal', 'bg-cyan');
        document.body.classList.add(`bg-${e.target.value}`);
    };

    const handleOptionHover = (e) => {
        const opt = document.getElementById(e.target.id);
        opt.classList.add(`bg-${e.target.value}`);
    }

    const handleOptionOut = (e) => {
        const opt = document.getElementById(e.target.id);
        opt.classList.remove(`bg-${e.target.value}`);
    }

    return (
        <div className={`dropdownDiv ${isDropdownOpen ? 'open' : ''}`} onMouseLeave={handleMouseLeave}>
            <label htmlFor="dropdown">Select Background</label>
            <select id="dropdown" name="dropdown" value={selectedOption}
                onMouseOver={handleHover}
                onChange={handleChange}
                size={isDropdownOpen ? options.length + 1 : 1}
            >
                <option value="white">Please select</option>
                {options.map((item) => (
                    <option key={item.optionValue} id={item.optionValue} value={item.optionValue} onMouseOver={handleOptionHover} onMouseOut={handleOptionOut}>{item.optionText}</option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown;