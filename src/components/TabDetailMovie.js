import CarrouselMovie from '../components/CarrouselMovie'
import { Tab } from "@headlessui/react";
import { useLocation } from "react-router-dom";
import FrameVideo from '../components/FrameVideo';

const MyTabs = () => {
  const location = useLocation();
  var objMovie = location.state;

  return (
    <Tab.Group>
      <Tab.List className="text-left-i">
        <Tab className="inline-block p-4 border-b-2 border-transparent rounded-t-lg text-white hover:border-gray-300 dark:hover:text-gray-300">Imágenes de la película</Tab>
        <Tab className="inline-block p-4 border-b-2 border-transparent rounded-t-lg text-white hover:border-gray-300 dark:hover:text-gray-300">Trailer </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className="">
            <CarrouselMovie />
        </Tab.Panel>
        <Tab.Panel><FrameVideo movie={objMovie} /></Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
export default MyTabs;
