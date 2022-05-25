import React from "react";
import Giorno from "./Giorno";
import { v4 as uuidv4 } from "uuid";
import {
  startOfMonth,
  endOfMonth,
  differenceInCalendarDays,
  eachDayOfInterval,
} from "date-fns";

const Mese = (dataSelezionata) => {
  const oggi = new Date();
  const inizioMese = startOfMonth(oggi);
  const fineMese = endOfMonth(oggi);

  const numeroGiorni = differenceInCalendarDays(fineMese, inizioMese) + 1;
  const arrayGiorni = eachDayOfInterval({
    start: inizioMese,
    end: fineMese,
  });

  return (
    <div className="mese_wrapper">
      {arrayGiorni.map((dataGiorno) => { 
        return <Giorno dataTimestamp={Date.parse(dataGiorno)} key={uuidv4()} />;
      })}
    </div>
  );
};

export default Mese;
