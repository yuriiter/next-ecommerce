import { Article } from "@/components/Article";
import { StandardHead } from "@/components/StandardHead";

const article = `
At Morent, we strive to provide you with a seamless and reliable car rental experience. Here's a breakdown of how our service operates:

## 1. Car Registration

Before a car becomes available for rental, it undergoes a thorough registration process. Owners interested in listing their vehicles on our platform register through our specialized service. We collect essential details about the vehicle, including its make, model, year, and current condition.

## 2. Quality Checks

Ensuring your safety is our top priority. Hence, each registered car undergoes rigorous quality checks. Our trained technicians meticulously inspect every aspect of the vehicle to verify its roadworthiness. We examine engine performance, brake systems, tires, lights, and other crucial components to guarantee that the car meets our standards.

## 3. Insurance Provision

Once a car successfully passes the quality checks, we provide comprehensive insurance coverage. This insurance protects both the owner and the renter against unforeseen accidents or damages during the rental period. We believe in offering peace of mind to both parties involved in the rental transaction.

## 4. Availability for Rental

After completing the registration, quality checks, and insurance formalities, the car becomes available for rental. Renters can browse through our diverse selection of vehicles and choose the one that best suits their needs. With a wide range of options available, ranging from compact cars to spacious SUVs, we ensure that there's something for everyone.

## 5. Advanced Technology Integration

To enhance your rental experience, each car on our platform is equipped with advanced technology features. These include GPS trackers for real-time location monitoring, sensors for monitoring vehicle health and performance, and additional safety features for your peace of mind on the road.

## Conclusion

At Morent, our streamlined process ensures that you receive a reliable and hassle-free car rental experience. From thorough quality checks to advanced technology integration, we leave no stone unturned in providing you with the best possible service. Trust us for your next adventure on the road!
`;
export default function HowItWorksArticle() {
  return (
    <>
      <StandardHead pageName="How Morent works" />
      <Article title="How Morent works">{article}</Article>;
    </>
  );
}
