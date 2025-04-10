import React from "react";
import styles from "./TransactionCard.module.css";
import { IoMdPizza } from "react-icons/io"; // Food icon
import { MdMovie } from "react-icons/md"; // Entertainment icon
import { CiRollingSuitcase } from "react-icons/ci"; // Travel icon
import { FaEdit, FaTimes } from "react-icons/fa"; // Edit/Delete
import { TiDeleteOutline, TiDelete } from "react-icons/ti";
const iconMap = {
  Food: <IoMdPizza className={styles.icon2} />,
  Entertainment: <MdMovie className={styles.icon2} />,
  Travel: <CiRollingSuitcase className={styles.icon2} />,
};

const TransactionCard = ({
  title,
  date,
  price,
  category,
  onEdit,
  onDelete,
}) => {
  return (
    <div className={styles.transactionCard}>
      {/* Left Icon */}

      <div className={styles.iconAndTitle}>
        <div className={styles.leftIcon}>
          <div className={styles.iconCircle}>{iconMap[category]}</div>
        </div>

        {/* Text Details */}
        <div className={styles.details}>
          <div className={styles.title}>{title}</div>
          <div className={styles.date}>{date}</div>
        </div>
      </div>

      {/* Buttons and price*/}
      <div className={styles.actions}>
        {/* ---Price */}
        <div className={styles.price}>₹{price}</div>

        {/*--- Button */}
        <div className={styles.buttonContainer}>
          <button
            // className={styles.deleteBtn}
            onClick={onDelete}
            style={{ backgroundColor: "red" }}
            className={styles.btn}
          >
            <TiDeleteOutline className={styles.icon2} />
          </button>

          <button
            // className={styles.editBtn}
            style={{ backgroundColor: "orange" }}
            onClick={onEdit}
            className={styles.btn}
          >
            <FaEdit className={styles.icon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
