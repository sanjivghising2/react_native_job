import { View, Text, TouchableOpacity , ActivityIndicator} from 'react-native';
import styles from './nearbyjobs.style';
import { COLORS} from '../../../constants';
import NearByJobCard from '../../common/cards/nearby/NearbyJobCard';
import { useRouter } from 'expo-router';
import useFetch from '../../../hook/useFetch';

const Nearbyjobs = () => {
const router =useRouter();
const {data, isLoading, error} =useFetch
('search',{
  query:"React Developer",
  num_pages:1   
})
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AllJobs')}>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
      {isLoading?(
        <ActivityIndicator size="large" colors={COLORS.primary}/>
      ):error? (
        <Text>something went wrong</Text>
      ):(
        data?.map((job)=>(
          <NearByJobCard 
            job={job}
            key={`nearby-job-${job?.job_id}`}
            handleNavigate={()=> router.push(`/job-details/${job.job_id}`)}
            
          />
        ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
