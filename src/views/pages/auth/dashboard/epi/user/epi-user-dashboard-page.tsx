import { useTranslation } from "react-i18next";
import { Plane, Syringe, Shield, Thermometer, User, UserCircle } from "lucide-react";
import DashboardCard from "@/components/custom-ui/card/DashboardCard";
import PieChartOne from "@/components/custom-ui/charts/pie/PieChartOne";
import BarChartFive from "@/components/custom-ui/charts/bar/BarChartFive";
import BarChartOne from "@/components/custom-ui/charts/bar/BarChartOne";
import PieChartTen from "@/components/custom-ui/charts/pie/PieChartTen";
import AreaChartNine from "@/components/custom-ui/charts/area/AreaChartNine";

export default function EpiUserDashboardPage() {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Cards Section */}
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            loading={false}
            key={"country"}
            title={t("Total Vaccinations")}
            description={t("january")}
            className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            value={100}
            symbol="+"
            icon={<Syringe className="text-blue-600 sm:w-14 sm:h-14 min-w-[32px] min-h-[32px]" />}
          />

          <DashboardCard
            loading={false}
            key={"district"}
            title={t("Female")}
            description={t("january")}
            className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            value={20000}
            symbol="+"
            icon={<UserCircle className="text-pink-600 sm:w-14 sm:h-14 min-w-[32px] min-h-[32px]" />}
          />

          <DashboardCard
            loading={false}
            key={"area"}
            title={t("Male")}
            description={t("area")}
            className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            value={566000}
            symbol="+"
            icon={<User className="text-blue-800 sm:w-14 sm:h-14 min-w-[32px] min-h-[32px]" />}
          />

          <DashboardCard
            loading={false}
            key={"job"}
            title={t("Covid-19")}
            description={t("job")}
            className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            value={600}
            symbol="+"
            icon={<Shield className="text-green-600 sm:w-14 sm:h-14 min-w-[32px] min-h-[32px]" />}
          />

          <DashboardCard
            loading={false}
            key={"meningitis"}
            title={t("Meningitis")}
            description={t("job")}
            className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            value={600}
            symbol="+"
            icon={<Shield className="text-purple-600 sm:w-14 sm:h-14 min-w-[32px] min-h-[32px]" />}
          />

          <DashboardCard
            loading={false}
            key={"polio"}
            title={t("Oral Polio Vaccine")}
            description={t("job")}
            className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            value={600}
            symbol="+"
            icon={<Shield className="text-yellow-600 sm:w-14 sm:h-14 min-w-[32px] min-h-[32px]" />}
          />

          <DashboardCard
            loading={false}
            key={"flu"}
            title={t("Seasonal Flu")}
            description={t("job")}
            className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            value={600}
            symbol="+"
            icon={<Thermometer className="text-red-600 sm:w-14 sm:h-14 min-w-[32px] min-h-[32px]" />}
          />

          <DashboardCard
            loading={false}
            key={"travel"}
            title={t("Travel Type")}
            description={t("Hajj Farzi:  Hajj Omra:  Others: ")}
            className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            value={600}
            symbol=" Total"
            icon={<Plane className="text-indigo-600 sm:w-14 sm:h-14 min-w-[32px] min-h-[32px]" />}
          />
        </div>
      </div>

      {/* Charts Section */}
      <div className="container mx-auto px-4 sm:px-6 pb-10 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Overall Vaccination Distribution</h3>
            <div className="h-64"> {/* Reduced height here */}
              <PieChartOne />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Male and Female Distribution</h3>
            <div className="h-64"> {/* Reduced height here */}
              <BarChartFive />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Populations Based on Vaccination Types Distribution</h3>
            <div className="h-64"> {/* Reduced height here */}
              <BarChartOne />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Gender/Vaccination Type Distribution</h3>
            <div className="h-64"> {/* Reduced height here */}
              <PieChartTen />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-10">Destination Distribution</h3>
          <div className="h-80"> {/* Reduced height here */}
            <AreaChartNine />
          </div>
        </div>
      </div>
    </div>
  );
}
