import MarkerProperty from './MarkerProperty';
import GeneralProperty from './GeneralProperty';
import StyleProperty from './StyleProperty';
import TooltipProperty from './TooltipProperty';
import ImageProperty from './ImageProperty';
import TextProperty from './TextProperty';
import MapProperty from './MapProperty';
import LinkProperty from './LinkProperty';
import VideoProperty from './VideoProperty';
import ElementProperty from './ElementProperty';
import IframeProperty from './IframeProperty';
import AnimationProperty from './AnimationProperty';
import ShadowProperty from './ShadowProperty';
import UserProperty from './UserProperty';
import TriggerProperty from './TriggerProperty';
import ImageFilterProperty from './ImageFilterProperty';
import ChartProperty from './ChartProperty';

export default {
	map: {
		map: {
			title: 'Map',
			component: MapProperty,
		},
		image: {
			title: 'Image',
			component: ImageProperty,
		},
	},
	group: {
		general: {
			title: 'General',
			component: GeneralProperty,
		},
		shadow: {
			title: 'Shadow',
			component: ShadowProperty,
		},
	},
	'i-text': {
		general: {
			title: 'General',
			component: GeneralProperty,
		},
		marker: {
			title: 'Marker',
			component: MarkerProperty,
		},
		link: {
			title: 'Link',
			component: LinkProperty,
		},
		tooltip: {
			title: 'Tooltip',
			component: TooltipProperty,
		},
		style: {
			title: 'Style',
			component: StyleProperty,
		},
		shadow: {
			title: 'Shadow',
			component: ShadowProperty,
		},
		animation: {
			title: 'Animation',
			component: AnimationProperty,
		},
		// trigger: {
		// 	title: 'Trigger',
		// 	component: TriggerProperty,
		// },
		userProperty: {
			title: 'User Property',
			component: UserProperty,
		},
	},
	textbox: {
		general: {
			title: 'General',
			component: GeneralProperty,
			component1: TextProperty,
			component2: StyleProperty,
		},
		// text: {
		// 	title: 'Text',
		// 	component: TextProperty,
		// },
		// link: {
		// 	title: 'Link',
		// 	component: LinkProperty,
		// },
		// tooltip: {
		// 	title: 'Tooltip',
		// 	component: TooltipProperty,
		// },
		// style: {
		// 	title: 'Style',
		// 	component: StyleProperty,
		// },
		// shadow: {
		// 	title: 'Shadow',
		// 	component: ShadowProperty,
		// },
		// animation: {
		// 	title: 'Animation',
		// 	component: AnimationProperty,
		// },
		// trigger: {
		// 	title: 'Trigger',
		// 	component: TriggerProperty,
		// },
		// userProperty: {
		// 	title: 'User Property',
		// 	component: UserProperty,
		// },
	},
	image: {
		general: {
			title: 'General',
			component: GeneralProperty,
			component1: ImageProperty,
				},
		// filter: {
		// 	title: 'Filter',
		// 	component: ImageFilterProperty,
		// },
		// link: {
		// 	title: 'Link',
		// 	component: LinkProperty,
		// },
		// tooltip: {
		// 	title: 'Tooltip',
		// 	component: TooltipProperty,
		// },
		// style: {
		// 	title: 'Style',
		// 	component: StyleProperty,
		// },
		// shadow: {
		// 	title: 'Shadow',
		// 	component: ShadowProperty,
		// },
		// animation: {
		// 	title: 'Animation',
		// 	component: AnimationProperty,
		// },
		// trigger: {
		// 	title: 'Trigger',
		// 	component: TriggerProperty,
		// },
		// userProperty: {
		// 	title: 'User Property',
		// 	component: UserProperty,
		// },
	},
	triangle: {
		general: {
			title: 'General',
			component: GeneralProperty,
			component1: StyleProperty,
		},
		// link: {
		// 	title: 'Link',
		// 	component: LinkProperty,
		// },
		// tooltip: {
		// 	title: 'Tooltip',
		// 	component: TooltipProperty,
		// },
		// style: {
		// 	title: 'Style',
		// 	component: StyleProperty,
		// },
		// shadow: {
		// 	title: 'Shadow',
		// 	component: ShadowProperty,
		// },
		// animation: {
		// 	title: 'Animation',
		// 	component: AnimationProperty,
		// },
		// trigger: {
		// 	title: 'Trigger',
		// 	component: TriggerProperty,
		// },
		// userProperty: {
		// 	title: 'User Property',
		// 	component: UserProperty,
		// },
	},
	rect: {
		general: {
			title: 'General',
			component: GeneralProperty,
			component1: StyleProperty,
		},
		// link: {
		// 	title: 'Link',
		// 	component: LinkProperty,
		// },
		// tooltip: {
		// 	title: 'Tooltip',
		// 	component: TooltipProperty,
		// },
		// style: {
		// 	title: 'Style',
		// 	component: StyleProperty,
		// },
		// shadow: {
		// 	title: 'Shadow',
		// 	component: ShadowProperty,
		// },
		// animation: {
		// 	title: 'Animation',
		// 	component: AnimationProperty,
		// },
		// trigger: {
		// 	title: 'Trigger',
		// 	component: TriggerProperty,
		// },
		// userProperty: {
		// 	title: 'User Property',
		// 	component: UserProperty,
		// },
	},
	circle: {
		general: {
			title: 'General',
			component: GeneralProperty,
			component1: StyleProperty,
		},
		// style: {
		// 	title: 'Style',
		// 	component: StyleProperty,
		// },
		// link: {
		// 	title: 'Link',
		// 	component: LinkProperty,
		// },
		// tooltip: {
		// 	title: 'Tooltip',
		// 	component: TooltipProperty,
		// },
		// style: {
		// 	title: 'Style',
		// 	component: StyleProperty,
		// },
		// shadow: {
		// 	title: 'Shadow',
		// 	component: ShadowProperty,
		// },
		// animation: {
		// 	title: 'Animation',
		// 	component: AnimationProperty,
		// },
		// trigger: {
		// 	title: 'Trigger',
		// 	component: TriggerProperty,
		// },
		// userProperty: {
		// 	title: 'User Property',
		// 	component: UserProperty,
		// },
	},
	polygon: {
		general: {
			title: 'General',
			component: GeneralProperty,
			component1: StyleProperty,
		},
		// link: {
		// 	title: 'Link',
		// 	component: LinkProperty,
		// },
		// tooltip: {
		// 	title: 'Tooltip',
		// 	component: TooltipProperty,
		// },
		// style: {
		// 	title: 'Style',
		// 	component: StyleProperty,
		// },
		// shadow: {
		// 	title: 'Shadow',
		// 	component: ShadowProperty,
		// },
		// animation: {
		// 	title: 'Animation',
		// 	component: AnimationProperty,
		// },
		// trigger: {
		// 	title: 'Trigger',
		// 	component: TriggerProperty,
		// },
		// userProperty: {
		// 	title: 'User Property',
		// 	component: UserProperty,
		// },
	},
	line: {
		general: {
			title: 'General',
			component: GeneralProperty,
			component1: StyleProperty,
		},
		// link: {
		// 	title: 'Link',
		// 	component: LinkProperty,
		// },
		// tooltip: {
		// 	title: 'Tooltip',
		// 	component: TooltipProperty,
		// },
		// style: {
		// 	title: 'Style',
		// 	component: StyleProperty,
		// },
		// shadow: {
		// 	title: 'Shadow',
		// 	component: ShadowProperty,
		// },
		// animation: {
		// 	title: 'Animation',
		// 	component: AnimationProperty,
		// },
		// trigger: {
		// 	title: 'Trigger',
		// 	component: TriggerProperty,
		// },
		// userProperty: {
		// 	title: 'User Property',
		// 	component: UserProperty,
		// },
	},
	arrow: {
		general: {
			title: 'General',
			component: GeneralProperty,
		},
		link: {
			title: 'Link',
			component: LinkProperty,
		},
		tooltip: {
			title: 'Tooltip',
			component: TooltipProperty,
		},
		style: {
			title: 'Style',
			component: StyleProperty,
		},
		shadow: {
			title: 'Shadow',
			component: ShadowProperty,
		},
		animation: {
			title: 'Animation',
			component: AnimationProperty,
		},
		// trigger: {
		// 	title: 'Trigger',
		// 	component: TriggerProperty,
		// },
		userProperty: {
			title: 'User Property',
			component: UserProperty,
		},
	},
	video: {
		general: {
			title: 'General',
			component: GeneralProperty,
			component1: VideoProperty,
		},
		// video: {
		// 	title: 'Video',
		// 	component: VideoProperty,
		// },
	},
	element: {
		general: {
			title: 'General',
			component: GeneralProperty,
			component1: ElementProperty,
		},
		// video: {
		// 	title: 'Element',
		// 	component: ElementProperty,
		// },
	},
	iframe: {
		general: {
			title: 'General',
			component: GeneralProperty,
			component1: IframeProperty,
		},
		// video: {
		// 	title: 'Iframe',
		// 	component: IframeProperty,
		// },
	},
	svg: {
		general: {
			title: 'General',
			component: GeneralProperty,
		},
		link: {
			title: 'Link',
			component: LinkProperty,
		},
		tooltip: {
			title: 'Tooltip',
			component: TooltipProperty,
		},
		style: {
			title: 'Style',
			component: StyleProperty,
		},
		shadow: {
			title: 'Shadow',
			component: ShadowProperty,
		},
		animation: {
			title: 'Animation',
			component: AnimationProperty,
		},
		// trigger: {
		// 	title: 'Trigger',
		// 	component: TriggerProperty,
		// },
		userProperty: {
			title: 'User Property',
			component: UserProperty,
		},
	},
	chart: {
		general: {
			title: 'General',
			component: GeneralProperty,
			component1: ChartProperty,
		},
		// chartOption: {
		// 	title: 'Chart Option',
		// 	component: ChartProperty,
		// },
	},
};
