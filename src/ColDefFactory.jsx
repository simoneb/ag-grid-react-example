import SkillsCellRenderer from './SkillsCellRenderer.jsx';
import ProficiencyCellRenderer from './ProficiencyCellRenderer.jsx';
import RefData from './RefData';
import { reactCellRendererFactory } from 'ag-grid-react';
import { reactFilterFactory } from 'ag-grid-react';
import SkillsFilter from './SkillsFilter.jsx';
import ProficiencyFilter from './ProficiencyFilter.jsx';

export default class ColDefFactory {

  createColDefs () {

    function date (params) {
      return `${params.value.toLocaleDateString()} ${params.value.toLocaleTimeString()}`;
    }

    function append (str) {
      return params => `${params.value} ${str}`;
    }

    const defaults = {
      suppressMovable: true,
      suppressSorting: true,
      suppressMenu: true
    };

    var columnDefs = [
      { ...defaults, headerName: 'Vessel', field: 'vessel' },
      { ...defaults, headerName: 'STA', field: 'sta', cellRenderer: date },
      { ...defaults, headerName: 'ETA', field: 'eta', cellRenderer: date },
      { ...defaults, headerName: 'Deviation', field: 'deviation', cellRenderer: append('hours') },
      { ...defaults, headerName: 'Distance to port', field: 'distance', cellRenderer: append('miles') },
      { ...defaults, headerName: 'Capacity (TEU)', field: 'capacity' },
      { ...defaults, headerName: 'State', field: 'state' },
      { ...defaults, headerName: 'Last port', field: 'lastPort' }
    ];
    return columnDefs;
  }
}
