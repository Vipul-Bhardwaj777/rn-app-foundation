import React, { ReactNode } from 'react';
import { Modal as RNModal, StyleSheet, View } from 'react-native';

export interface ModalProps {
  visible: boolean;
  children: ReactNode;
  onRequestClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  visible,
  children,
  onRequestClose,
}) => (
  <RNModal visible={visible} transparent onRequestClose={onRequestClose}>
    <View style={styles.backdrop}>
      <View style={styles.content}>{children}</View>
    </View>
  </RNModal>
);

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  content: {
    minWidth: '80%',
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#ffffff',
  },
});
