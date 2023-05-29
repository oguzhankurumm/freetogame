import React from 'react';
import { View } from 'react-native';
import styles from './style';
import Modal from 'react-native-modal';
import Lottie from 'lottie-react-native';
import LoadingAnimation from '../../assets/animations/loading.json';
import { dark } from '../../assets/colors';

interface LoadingModalProps {
    visible: boolean;
}

const LoadingModal: React.FC<LoadingModalProps> = ({ visible }) => {
    return (
        <Modal
            isVisible={visible}
            hideModalContentWhileAnimating
            animationIn={'fadeIn'}
            animationOut={'fadeOut'}
            useNativeDriver
            style={{ margin: 0 }}
            backdropColor={dark}
            backdropOpacity={0.4}
        >
            <View style={styles.container}>
                <View style={styles.animationContainer}>
                    <Lottie
                        source={LoadingAnimation}
                        autoPlay
                        loop
                        style={styles.animation}
                        speed={2}
                    />
                </View>
            </View>
        </Modal>
    );
};

export default LoadingModal;