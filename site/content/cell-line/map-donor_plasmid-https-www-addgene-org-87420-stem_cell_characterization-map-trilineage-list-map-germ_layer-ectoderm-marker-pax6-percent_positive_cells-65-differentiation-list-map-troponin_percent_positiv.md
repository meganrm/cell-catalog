---
cell_line_id: AICS-0005
date: 2023-09-11T23:19:08.054Z
clone_number: 50
parent_line: WTC
gene: paxillin
alleleCount: mono
status: done
data_available: true
terminal_tagged: C-terminus
fluorescent_tag: EGFP
linker: GTSGGS
order_link: https://catalog.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=AICS-0005&Product=iPSC
cofa: https://catalog.coriell.org/0/PDF/Allen/ipsc/AICS-0005_CofA.pdf
parental_order_link: https://catalog.coriell.org/0/Sections/Search/Sample_Detail.aspx?Ref=GM25256&Product=CC
donor_plasmid: https://www.addgene.org/87420/
eu_hpsc_reg: https://hpscreg.eu/cell-line/UCSFi001-A-1
media:
  - type: movie
    data_type: timelapse in low mag
    file_name: 20160610_C04_001_position5_z4ScalePt75_8bit10fps.mov
    caption: Timelapse movie of a hiPSC colony expressing paxillin-EGFP. Images are
      a single slice near the bottom of the cell taken every 5 minutes for 400
      minutes on a spinning-disk confocal microscope. Movie sped up 3000x over
      real time.
    link: https://player.vimeo.com/video/198387263
  - type: movie
    data_type: timelapse in high mag
    file_name: MAX_20160610_C09_001_position1ScalePt75Overlay_RGBcombo5fps.mov
    caption: Timelapse movie of a hiPSC colony expressing paxillin-EGFP. Images
      taken as a partial z-stack near the bottom of the cell every 5 minutes for
      160 minutes on a spinning-disk confocal microscope. Image is a maximum
      intensity projection. Movie sped up 1500x over real time.
    link: https://player.vimeo.com/video/198389731
editing_design:
  cas9: Wildtype spCas9
  crRNA_seq: GCACCTAGCAGAAGAGCTTG
  NCBI_isoform: NM_0028593
  gene_figure_caption: "Top: PXN locus showing 4 PXN isoforms; Bottom: Zoom in on
    EGFP insertion site at PXN C-terminal exon"
  gene_figure: img/editingdesign_gene_figure.png
genomic_characterization:
  junction_schematic: img/genomiccharacterization_junction_schematic.png
  junction_table:
    - editedGene: PXN-EGFP
      junction: 5'
      expected_size: "1186"
      confirmed_sequence: true
  tagged_allele_gel_caption: Junctional PCR primers complementary to sequences
    flanking the homology arms in the distal genome were used together to
    co-amplify tagged and untagged alleles. Gel shows untagged allele (smaller
    band) and tagged allele (larger band) from single PCR reaction. A band
    intermediate in size between the anticipated tagged and untagged allele
    products is consistently observed and is a hypothesized heteroduplex of the
    tagged and untagged allele products. (1% Agarose gel with Thermo Fisher 1kb
    ladder). *clone available from Coriell",
  ddpcr_caption: "EGFP: EGFP/RPP30 ratio from ddPCR assay; values = 0.5 +/- 0.1
    indicate heterozygous clone, values = 1 +/- 0.1 indicate homozygous clone.
    Plasmid: AmpR/RPP30 ratio from ddPCR assay; values <0.1 indicate clone with
    no detectable plasmid integration. RPP30 is known 2n reference gene."
  junction_table_caption: PCR amplified and Sanger sequenced 5’, 3’, WT, and full
    allele junctions to check for precise EGFP insertion. Primers were designed
    to exclude amplification from the donor plasmid.
  off_targets:
    - clones_analyzed: 5
      off_targets_sequenced: 11
      sites_sequenced: 55
      mutations_identified: 0
  off_targets_caption: "Potential off-targets were identified using Cas-OFFinder;
    ~4 off-targets in exons and ~ 4 most likely to cut off-targets (having
    fewest # of flaws relative to on-target) were sanger sequenced to confirm no
    off-target editing."
  tagged_allele_gel: img/genomiccharacterization_tagged_allele_gel.jpg
  ddpcr:
    - gene_tag: PXN-EGFP
      clone: cl50
      fp_ratio: "0.56"
      plasmid: "0"
validation:
  western_blot: img/westernblotdocumentationpxnfinalcloneonly_final.jpg
  immunofluorescence: img/paxillin_clone_50_and_aics000_122016.jpg
stem_cell_characterization:
  trilineage:
    - germ_layer: Ectoderm
      marker: PAX6
      percent_positive_cells: 65
  differentiation:
    - troponin_percent_positive: 66-98 (4)
      day_of_beating_percent: 75 (16)
      day_of_beating_range: d7-d17
  rnaseq_fig_caption: Transcript levels of stem cell markers and edited locus.
    Heat maps are based on log2 normalized read counts. Cardiomyocyte samples at
    Day 5 and Day 20 are shown for comparison. Unedited Stem Cell samples are
    from passage 14 and passage 8. PXN-EGFP samples are from two independent
    clones.
  trilineage_caption: iPSCs were subjected to a 5-7 day, non-terminal, directed
    differentiation using the STEMdiff™ Trilineage Differentiation Kit (STEMCELL
    Technologies, Inc.). Cells were stained for markers of Ectoderm, Endoderm,
    and Mesoderm lineages using directly conjugated antibodies from BD
    Biosciences. Gating was based on isotype controls.
  karyotype: img/stemcellcharacterization_karyotype.jpg
  differentiation_caption: iPSCs were differentiated to cardiomyocytes and
    observed for initiation of beating starting at day 6. At ~day 20, cells were
    fixed and stained with anti-cardiac Troponin T (BD Biosciences) and gating
    was based on an isotype control. Ranges observed across multiple experiments
    are shown for Troponin T and Day of beating initiation; number of
    experiments is shown in ().
  karyotype_caption: After cells banks were created, one vial was thawed and 20
    G-banded metaphase cells were karyotyped.
  pluripotency_analysis:
    - marker: NANOG
      positive_cells: 98
  pluripotency_analysis_caption: iPSCs were stained with directly conjugated
    antibodies from BD Biosciences, acquired using a FACSAria III Fusion (BD
    Biosciences), and analyzed using FlowJo software (Treestar, Inc.). Doublets
    were excluded, then marker-specific gates were set according to
    corresponding fluorescence-minus-one (FMO) controls.
  rnaseq_fig: img/stemcellcharacterization_rnaseq_fig.png
protocols:
  culturing: img/aics_wtc_culture-sop_external_v1-7_200210.pdf
  transfection: img/aics_sop_rnp_transfection.pdf
  imaging: img/aics_sop_wtc-cell-plating-on-glass-for-imaging.pdf
  ddpcr: img/ddpcr_cnv_assay_170526_final.pdf
  cardio_diff: img/sop_for_cardiomyocyte_differentiation_methods_v1.2_021020.pdf
  banking: img/aics_banking_guidelines_external_v1.3_200210.pdf
STR_analysis: /data/pdfs/WTC11_STR_analysis.pdf
supplementary:
  cell_culture_link: img/offtarget_primers.xlsx
  acknowledgements: img/aics_acknowledgements.pdf
  primers_link: img/sop_for_cardiomyocyte_differentiation_methods_v1.0.pdf
  offtargets_link: img/sop_for_cardiomyocyte_differentiation_methods_v1.0.pdf
---
