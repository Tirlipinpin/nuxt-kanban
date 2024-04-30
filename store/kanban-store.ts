interface Column {
  label: string
  entityIds: number[]
}

interface Entity {
  title: string
  color: string
}

interface KanbanStore {
  columnIds: number[]
  columnsById: Record<number, Column>
  entitiesById: Record<number, Entity>
  isLoaded: boolean
  displayedEntityId: number | null

  fetchKanban: () => void
  openEntityCard: (entityId: number) => void
  closeEntityCard: () => void
}

export const kanbanStore = reactive<KanbanStore>({
  columnIds: [],
  columnsById: {},
  entitiesById: {},
  isLoaded: false,
  displayedEntityId: null,

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
      1: { title: "Polish UI", color: '#874CCC' },
      2: { title: "Create some bullshit mocked data", color: '#F8CB2E' },
      3: { title: "Look up a good state management system", color: '#EE5007' },
      4: { title: "Take a break", color: '#EE5007' },
      5: { title: "Try out mutation system", color: '#874CCC' },
      6: { title: "Read some docs...", color: '#B22727' },
      7: { title: "Create second page", color: '#F8CB2E' },
      8: { title: "Create first page", color: '#874CCC' },
      9: { title: "Init git repository", color: '#EE5007' },
      10: { title: "Create project", color: '#EE5007' },
    }

    this.isLoaded = true
  },

  openEntityCard(entityId: number) {
    console.log("setting the entityid", entityId)
    this.displayedEntityId = entityId
  },

  closeEntityCard() {
    this.displayedEntityId = null
  }
})