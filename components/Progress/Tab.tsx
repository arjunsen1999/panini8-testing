import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useEffect, useState } from "react";
interface TabProps {
  date: string;
  minute: number;
  success: number;
  total: number;
  skip: number;
  wrong: number;
  data: any;
}

const Tab: React.FC<TabProps> = ({
  date,
  minute,
  success,
  skip,
  total,
  wrong,
  data,
}) => {
  console.log(data);
  const [totalTime, setTotalTime] = useState(0);

  const calculateTime = (data: any) => {
    const val = data.attemptedQuestionTimeInSec;
    const totalSeconds = val.reduce((a: number, b: number) => a + b, 0);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { hours, minutes, seconds };
  };
  return (
    <div className="flex justify-center">
      <div className="w-[90%]  bg-white">
        <div className="m-2 ">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Time Spent</TableHead>
                <TableHead>Success</TableHead>
                <TableHead>Skipped</TableHead>
                <TableHead>Wrong</TableHead>
              </TableRow>
            </TableHeader>
            {data &&
              data.map((elem: any, idx : number) => (
                <TableBody key={idx}>
                  <TableRow>
                    <TableCell>{elem.date}</TableCell>
                    <TableCell>
                      {`${calculateTime(elem).hours} : ${
                        calculateTime(elem).minutes
                      } : ${calculateTime(elem).seconds}`}
                    </TableCell>
                    <TableCell>
                      {elem.currectQuestions.length}/
                      {elem.attemptedQuestions.length}
                    </TableCell>
                    <TableCell>
                      {elem.skipQuestions.length}/
                      {elem.attemptedQuestions.length}
                    </TableCell>
                    <TableCell>
                      {elem.wrongQuestions.length}/
                      {elem.attemptedQuestions.length}
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Tab;
