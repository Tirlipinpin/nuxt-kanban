import mockedEntitiesById from "~/mock/entitiesById.json"
import mockedTagsById from "~/mock/tagsById.json"

interface Column {
  label: string
  entityIds: string[]
}

interface Tag {
  title: string
  color: string
}

interface Entity {
  title: string
  color: string
  tagIds: string[]
}

interface KanbanStore {
  columnIds: string[]
  columnsById: Record<string, Column>
  entitiesById: Record<string, Entity>
  isLoaded: boolean
  displayedEntityId: string | null

  tagsById: Record<string, Tag>

  fetchKanban: () => void
  openEntityCard: (entityId: string) => void
  closeEntityCard: () => void
}

export const kanbanStore = reactive<KanbanStore>({
  columnIds: [],
  columnsById: {},
  entitiesById: {},
  isLoaded: false,
  displayedEntityId: null,

  tagsById: mockedTagsById,

  async fetchKanban() {
    const promise = new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })

    await promise

    this.columnIds = ["1", "2", "3", "4", "5", "6"]
    this.columnsById = {
      1: { label: 'To do', entityIds: ["1", "2"] },
      2: { label: 'In progress', entityIds: ["3"] },
      3: { label: 'Code review', entityIds: ["4", "5", "6"] },
      4: { label: 'Showcase', entityIds: ["7", "8"] },
      5: { label: 'QA', entityIds: ["9"] },
      6: { label: 'Done', entityIds: ["10"] }
    }
    this.entitiesById = mockedEntitiesById

    this.isLoaded = true
  },

  openEntityCard(entityId: string) {
    this.displayedEntityId = entityId
  },

  closeEntityCard() {
    this.displayedEntityId = null
  }
})