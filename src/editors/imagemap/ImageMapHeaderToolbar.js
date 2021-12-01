import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18next';

import { Flex } from '../../components/flex';
import ImageMapList from './ImageMapList';
import { CommonButton } from '../../components/common';
import Icon from '../../components/icon/Icon';

class ImageMapHeaderToolbar extends Component {
	static propTypes = {
		canvasRef: PropTypes.any,
		selectedItem: PropTypes.object,
	};

	render() {
		const { canvasRef, selectedItem } = this.props;
		const isCropping = canvasRef ? canvasRef.handler?.interactionMode === 'crop' : false;
		return (
			<Flex className="rde-editor-header-toolbar-container" flex="1">
				<Flex.Item className="rde-canvas-toolbar rde-canvas-toolbar-history">
					<CommonButton
						className="rde-action-btn"
						disabled={isCropping || (canvasRef && !canvasRef.handler?.transactionHandler.undos.length)}
						onClick={() => canvasRef.handler?.transactionHandler.undo()}
					>
						<Icon name="undo-alt" style={{ marginRight: 8 }} />
						Undo
					</CommonButton>
					<CommonButton
						className="rde-action-btn"
						disabled={isCropping || (canvasRef && !canvasRef.handler?.transactionHandler.redos.length)}
						onClick={() => canvasRef.handler?.transactionHandler.redo()}
					>
						Redo
						<Icon name="redo-alt" style={{ marginLeft: 8 }} />
					</CommonButton>
				</Flex.Item>
			</Flex>
		);
	}
}

export default ImageMapHeaderToolbar;
