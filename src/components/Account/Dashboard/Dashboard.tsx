import { Grid } from "@/components/Grid/Grid";
import { AccountLayout } from "../AccountLayout";
import { Typography } from "@/components/Typography/Typography";
import { GridCell } from "@/components/Grid/GridCell";

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
          Cell 1
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
