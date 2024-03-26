import { AuthGuard } from "@/components/AuthGuard";
import { LoadingPoints } from "@/components/LoadingPoints";
import { Steps } from "@/components/Rent/Steps/Steps";
import { Summary } from "@/components/Rent/Summary";
import { StandardHead } from "@/components/StandardHead";
import { Typography } from "@/components/Typography/Typography";
import { useGetCar } from "@/queries/useGetCar";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function CarRentPage() {
  const router = useRouter();
  const { carId } = router.query;
  const [carResponse] = useGetCar(carId as string, false);

  const [summarySubtotal, setSummarySubtotal] = useState(80);
  const [summaryTax, setSummaryTax] = useState(0);

  return (
    <>
      <StandardHead
        pageName={`Car Rental ${carResponse.data?.data?.name ?? ""}`}
      />
      <AuthGuard>
        <div className="rent container">
          {carResponse.type === "pending" ? (
            <Typography className="text-center" secondary300 size="16">
              Loading <LoadingPoints />
            </Typography>
          ) : !carResponse.data?.data ? (
            <Typography className="text-center" secondary300 size="16">
              No data found
            </Typography>
          ) : (
            <>
              <Steps />
              <Summary
                car={carResponse.data?.data}
                subtotal={summarySubtotal}
                tax={summaryTax}
                total={80}
              />
            </>
          )}
        </div>
      </AuthGuard>
    </>
  );
}
