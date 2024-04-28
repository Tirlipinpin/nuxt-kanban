interface Column {
  label: string
  entityIds: number[]
}

interface Entity {
  title: string
}

interface KanbanStore {
  columnIds: number[]
  columnsById: Record<number, Column>
  entitiesById: Record<number, Entity>
  isLoaded: boolean

  fetchKanban: () => void
}

export const kanbanStore = reactive<KanbanStore>({
  columnIds: [],
  columnsById: {},
  entitiesById: {},
  isLoaded: false,

  async fetchKanban() {
    const promise = new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })

    await promise

    this.columnIds = [1, 2, 3, 4, 5, 6]
    this.columnsById = {
      1: { label: 'To do', entityIds: [1, 2] },
      2: { label: 'In progress', entityIds: [3] },
      3: { label: 'Code review', entityIds: [4, 5, 6] },
      4: { label: 'Showcase', entityIds: [7, 8] },
      5: { label: 'QA', entityIds: [9] },
      6: { label: 'Done', entityIds: [10] }
    }
    this.entitiesById = {
      1: { title: "Polish UI" },
      2: { title: "Create some bullshit mocked data" },
      3: { title: "Look up a good state management system" },
      4: { title: "Take a break" },
      5: { title: "Try out mutation system" },
      6: { title: "Read some docs..." },
      7: { title: "Create second page" },
      8: { title: "Create first page" },
      9: { title: "Init git repository" },
      10: { title: "Create project" },
    }

    this.isLoaded = true
  }
})