import React, {useState, type CSSProperties} from 'react';
import clsx from 'clsx';

import styles from './TraceabilityExplorer.module.css';
import {traceabilityStages} from './stages';

function getStorageClassName(name: string) {
  switch (name) {
    case 'Celo':
      return styles.celo;
    case 'IPFS':
      return styles.ipfs;
    case 'Hedera':
      return styles.hedera;
    case 'Mantle':
      return styles.mantle;
    default:
      return styles.storageOther;
  }
}

export default function TraceabilityExplorer() {
  const [selectedStageId, setSelectedStageId] = useState(traceabilityStages[0].id);

  const selectedStage =
    traceabilityStages.find((stage) => stage.id === selectedStageId) ?? traceabilityStages[0];

  return (
    <section className={styles.explorer} aria-label="Traceability explorer">
      <div className={styles.layout}>
        <nav className={styles.sidebar} aria-label="Traceability stages">
          {traceabilityStages.map((stage) => {
            const isSelected = stage.id === selectedStage.id;

            return (
              <button
                key={stage.id}
                type="button"
                className={clsx(styles.stageButton, isSelected && styles.stageButtonSelected)}
                style={{'--stage-accent': stage.accent} as CSSProperties}
                aria-pressed={isSelected}
                onClick={() => setSelectedStageId(stage.id)}
              >
                <div className={styles.stageMeta}>
                  <span className={styles.stageNumber}>{stage.step}</span>
                  <span className={styles.stageBadge}>{stage.badge}</span>
                </div>
                <h3 className={styles.stageTitle}>{stage.title}</h3>
                <p className={styles.stageSummary}>{stage.summary}</p>
              </button>
            );
          })}
        </nav>

        <article className={styles.panel}>
          <header
            className={styles.panelHeader}
            style={{'--stage-accent': selectedStage.accent} as CSSProperties}
          >
            <p className={styles.panelKicker}>Stage {selectedStage.step}</p>
            <h3 className={styles.panelTitle}>{selectedStage.title}</h3>
            <p className={styles.panelSummary}>{selectedStage.summary}</p>
          </header>

          <div className={styles.infoGrid}>
            <section className={styles.infoCard}>
              <span className={styles.infoLabel}>Actor</span>
              <p className={styles.infoValue}>{selectedStage.actor}</p>
            </section>

            <section className={styles.infoCard}>
              <span className={styles.infoLabel}>Government system link</span>
              <p className={styles.infoValue}>{selectedStage.governmentSystem}</p>
            </section>

            <section className={styles.infoCard}>
              <span className={styles.infoLabel}>Evidence captured</span>
              <ul className={styles.dataList}>
                {selectedStage.dataPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className={styles.infoCard}>
              <span className={styles.infoLabel}>Written to</span>
              <ul className={styles.storageList}>
                {selectedStage.storage.map((storage) => (
                  <li
                    key={`${selectedStage.id}-${storage.name}`}
                    className={clsx(styles.storageChip, getStorageClassName(storage.name))}
                  >
                    <span>{storage.name}</span>
                    <small>{storage.detail}</small>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <p className={styles.note} style={{'--stage-accent': selectedStage.accent} as CSSProperties}>
            <em>{selectedStage.note}</em>
          </p>
        </article>
      </div>
    </section>
  );
}