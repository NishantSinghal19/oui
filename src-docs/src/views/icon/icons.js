/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

import React from 'react';

import {
  OuiFlexGrid,
  OuiFlexItem,
  OuiIcon,
  OuiPanel,
  OuiCopy,
  OuiCodeBlock,
  OuiSpacer,
} from '../../../../src/components';

export const iconTypes = [
  'accessibility',
  'aggregate',
  'alert',
  'analyzeEvent',
  'annotation',
  'anomalyDetection',
  'apmTrace',
  'apps',
  'arrowDown',
  'arrowLeft',
  'arrowRight',
  'arrowUp',
  'asterisk',
  'beaker',
  'bell',
  'bellSlash',
  'bolt',
  'boxesHorizontal',
  'boxesVertical',
  'branch',
  'broom',
  'brush',
  'bug',
  'bullseye',
  'calendar',
  'chatLeft',
  'chatRight',
  'check',
  'checkInCircleEmpty',
  'checkInCircleFilled',
  'cheer',
  'clock',
  'cloudDrizzle',
  'cloudStormy',
  'cloudSunny',
  'color',
  'compute',
  'console',
  'continuityAbove',
  'continuityAboveBelow',
  'continuityBelow',
  'continuityWithin',
  'controlsHorizontal',
  'controlsVertical',
  'copy',
  'copyClipboard',
  'cross',
  'crosshairs',
  'crossInCircleEmpty',
  'crossInACircleFilled',
  'currency',
  'cut',
  'database',
  'document',
  'documentation',
  'documentEdit',
  'documents',
  'dot',
  'download',
  'email',
  'empty',
  'eql',
  'eraser',
  'exit',
  'expand',
  'expandMini',
  'exportAction',
  'eye',
  'eyeClosed',
  'faceHappy',
  'faceNeutral',
  'faceSad',
  'filter',
  'flag',
  'fold',
  'folderCheck',
  'folderClosed',
  'folderExclamation',
  'folderOpen',
  'frameNext',
  'framePrevious',
  'fullScreen',
  'fullScreenExit',
  'function',
  'gear',
  'glasses',
  'globe',
  'grab',
  'grabHorizontal',
  'grid',
  'heart',
  'heatmap',
  'help',
  'home',
  'iInCircle',
  'image',
  'importAction',
  'indexClose',
  'indexEdit',
  'indexFlush',
  'indexMapping',
  'indexOpen',
  'indexRuntime',
  'indexSettings',
  'inputOutput',
  'inspect',
  'integrationGeneral',
  'integrationObservability',
  'integrationSearch',
  'integrationSecurity',
  'invert',
  'ip',
  'keyboardShortcut',
  'kqlField',
  'kqlFunction',
  'kqlOperand',
  'kqlSelector',
  'kqlValue',
  'layers',
  'link',
  'list',
  'listAdd',
  'lock',
  'lockOpen',
  'logstashFilter',
  'logstashIf',
  'logstashInput',
  'logstashOutput',
  'logstashQueue',
  'magnifyWithMinus',
  'magnifyWithPlus',
  'magnet',
  'mapMarker',
  'memory',
  'merge',
  'menu',
  'menuDown',
  'menuLeft',
  'menuRight',
  'menuUp',
  'minimize',
  'minus',
  'minusInCircle',
  'minusInCircleFilled',
  'mobile',
  'moon',
  'nested',
  'node',
  'number',
  'offline',
  'online',
  'package',
  'pageSelect',
  'pagesSelect',
  'paperClip',
  'partial',
  'pause',
  'pencil',
  'percent',
  'pin',
  'pinFilled',
  'play',
  'playFilled',
  'plus',
  'plusInCircle',
  'plusInCircleFilled',
  'polygon',
  'popout',
  'power',
  'push',
  'questionInCircle',
  'quote',
  'radius',
  'redeploy',
  'refresh',
  'reporter',
  'returnKey',
  'save',
  'scale',
  'search',
  'securitySignal',
  'securitySignalDetected',
  'securitySignalResolved',
  'shard',
  'share',
  'snowflake',
  'sortable',
  'sortDown',
  'sortLeft',
  'sortRight',
  'sortUp',
  'starEmpty',
  'starEmptySpace',
  'starFilled',
  'starFilledSpace',
  'starMinusEmpty',
  'starMinusFilled',
  'starPlusEmpty',
  'starPlusFilled',
  'stats',
  'stop',
  'stopFilled',
  'stopSlash',
  'storage',
  'string',
  'submodule',
  'symlink',
  'tableOfContents',
  'tableDensityExpanded',
  'tableDensityCompact',
  'tableDensityNormal',
  'tag',
  'tear',
  'temperature',
  'thumbsDown',
  'thumbsUp',
  'timeline',
  'timeslider',
  'training',
  'trash',
  'undeploy',
  'unfold',
  'unlink',
  'user',
  'users',
  'vector',
  'videoPlayer',
  'visArea',
  'visAreaStacked',
  'visBarHorizontal',
  'visBarHorizontalStacked',
  'visBarVertical',
  'visBarVerticalStacked',
  'visBuilder',
  'visBuilderSavedObject',
  'visGauge',
  'visGoal',
  'visLine',
  'visMapCoordinate',
  'visMapRegion',
  'visMetric',
  'visPie',
  'visQueryDQL',
  'visQueryPPL',
  'visQueryPromQL',
  'visQuerySQL',
  'visTable',
  'visTagCloud',
  'visText',
  'visTimelion',
  'visVega',
  'visVisualBuilder',
  'wordWrap',
  'wordWrapDisabled',
  'wrench',
];

export default () => (
  <>
    <OuiCodeBlock language="html" isCopyable paddingSize="m">
      {'<OuiIcon type="alert" />'}
    </OuiCodeBlock>
    <OuiSpacer />
    <OuiFlexGrid direction="column" columns={3}>
      {iconTypes.map((iconType) => (
        <OuiFlexItem key={iconType}>
          <OuiCopy
            display="block"
            textToCopy={iconType}
            afterMessage={`${iconType} copied`}>
            {(copy) => (
              <OuiPanel
                hasShadow={false}
                hasBorder={false}
                onClick={copy}
                paddingSize="s">
                <OuiIcon className="oui-alignMiddle" type={iconType} /> &emsp;{' '}
                <small>{iconType}</small>
              </OuiPanel>
            )}
          </OuiCopy>
        </OuiFlexItem>
      ))}
    </OuiFlexGrid>
  </>
);
