import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){

    const { level } = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://pbs.twimg.com/profile_images/846118214115479552/vaU-yKqv_400x400.jpg" alt="Yago"/>
        
        <div>
            <strong>Yago Almeida</strong>
            <p>
                <img src="icons/level.svg" alt="Level"/>    
                Level {level}
            </p>
        </div>
        </div>
    
    );
}

export default Profile;