// src/components/Icon/Icon.jsx

import Add from '../../assets/images/add.svg';
import Edit from '../../assets/images/edit.svg';
import Hawk from '../../assets/images/hawk-1853120_640.jpg';
import Create from '../../assets/images/create.svg';
import Trash from '../../assets/images/trash.svg';
import Comments from '../../assets/images/comments.svg';
import Calendar from '../../assets/images/calendar.svg';

const Icon = ({ category }) => {
  const icons = {
    Add: Add,
    Edit: Edit,
    Hawk: Hawk,
    Create: Create,
    Trash: Trash,
    Calendar: Calendar,
    Comments: Comments,
  };

  return (
    <img
      src={icons[category]}
      alt={`A ${category} icon.`}
      id={category.toLowerCase()}
      className="icon"
    />
  );
};

export default Icon;
