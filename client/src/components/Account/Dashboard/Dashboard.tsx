import { Grid } from "@/components/Grid/Grid";
import { AccountLayout } from "../AccountLayout";
import { Typography } from "@/components/Typography/Typography";
import { GridCell } from "@/components/Grid/GridCell";
import { RentalDetails } from "./RentalDetails";
import { popularCarsMockup } from "@/constants/mockupData";

export const Dashboard = () => {
  return (
    <AccountLayout>
      <Grid
        gridTemplateRows="1.38fr 2.04fr"
        gridTemplateColumns="1fr 1fr"
        gap={32}
        spaceBetween
        className="dashboard__grid"
      >
        <GridCell className="dashboard__cell" gridRow="span 2">
          <RentalDetails
            rentalData={{
              id: "9741",
              car: popularCarsMockup[0],
              pickUpDate: new Date(),
              pickUpLocation: "Los Angeles",
              pickUpTime: "10:10",
              dropOffDate: new Date(),
              dropOffLocation: "Los Angeles",
              dropOffTime: "19:20",
              total: 100,
            }}
          />
        </GridCell>
        <GridCell className="dashboard__cell" gridColumn="2">
          Cell 2
        </GridCell>
        <GridCell className="dashboard__cell" gridRow="2" gridColumn="2">
          Cell 3
        </GridCell>
      </Grid>
    </AccountLayout>
  );
};
